import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      return null;
    }
    try {
      aiClient = new GoogleGenAI({ apiKey: key });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI:", e);
      return null;
    }
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", aiEnabled: !!getGenAI() });
  });

  // Clinical Q&A AI Endpoint
  app.post("/api/ai/ask", async (req, res) => {
    try {
      const { question, patientName, reportsSummary, patientConditions } = req.body;
      const ai = getGenAI();

      if (!ai) {
        // Fallback demo intelligence response when key isn't provided
        return res.json({
          fallback: true,
          answer: `Based on clinical synthesis of ${patientName}'s longitudinal reports, the requested clinical assessment indicates notable correlations with existing documented conditions (${patientConditions?.join(", ") || "chronic markers"}). Reviewing the latest lab panels and consultation records reveals stable progression under current therapeutic regimens, though monitoring renal and vascular markers remains advised.`,
          evidenceLinks: [
            { reportTitle: "Latest CBC & Metabolic Panel", page: 1, snippet: "Abnormal marker trend flagged for monitoring." },
            { reportTitle: "Physician Consultation Note", page: 2, snippet: "Continue current pharmacological therapy." }
          ]
        });
      }

      const prompt = `You are the Clinical Q&A Agent and Report Verification Agent inside an enterprise healthcare platform for Dr. Arjun at Apollo/Cleveland Clinic.
Patient Name: ${patientName}
Known Conditions: ${patientConditions?.join(", ")}
Summary of Available Reports: ${JSON.stringify(reportsSummary || []).slice(0, 3000)}

Doctor Question: "${question}"

Provide a highly professional, evidence-based clinical summary answering the doctor's question based strictly on the provided records. Never diagnose new unrecorded diseases or prescribe unapproved treatments.
Format your response as JSON:
{
  "answer": "Clear professional clinical synthesis answering the doctor...",
  "evidenceLinks": [
    { "reportTitle": "Exact Report Name from summary", "page": 1, "snippet": "Supporting quote or laboratory finding" }
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json(parsed);
    } catch (err: any) {
      console.error("AI Ask Error:", err);
      res.status(500).json({ error: err.message || "AI query failed" });
    }
  });

  // Report Comparison AI Endpoint
  app.post("/api/ai/compare", async (req, res) => {
    try {
      const { reportA, reportB, patientName } = req.body;
      const ai = getGenAI();

      if (!ai) {
        return res.json({
          fallback: true,
          summary: `Comparing ${reportA.title} (${reportA.date}) with ${reportB.title} (${reportB.date}) for ${patientName} reveals key physiological shifts across multiple biomarkers.`,
          improvements: ["Blood pressure stabilized towards target threshold", "LDL cholesterol reduced following statin optimization"],
          worsened: ["Glycated hemoglobin (HbA1c) showed slight upward trajectory", "Estimated GFR (eGFR) requires continued renal surveillance"],
          newFindings: ["Mild hepatic lipid accumulation noted on secondary screening"],
          medicationChanges: {
            previous: ["Metformin 500 mg BID", "Telmisartan 20 mg OD"],
            current: ["Metformin 1000 mg BID", "Telmisartan 40 mg OD", "Atorvastatin 10 mg HS added"]
          },
          labComparison: [
            { test: "HbA1c", previous: "7.2%", current: "8.1%", change: "Increased" },
            { test: "Blood Pressure", previous: "150/95 mmHg", current: "135/85 mmHg", change: "Improved" },
            { test: "LDL Cholesterol", previous: "165 mg/dL", current: "130 mg/dL", change: "Improved" },
            { test: "Serum Creatinine", previous: "1.1 mg/dL", current: "1.3 mg/dL", change: "Slightly Increased" },
            { test: "eGFR", previous: "78 mL/min", current: "70 mL/min", change: "Slightly Reduced" }
          ],
          timelineUpdate: `Between ${reportA.date} and ${reportB.date}, patient exhibited cardiovascular improvement alongside worsening glycemic regulation.`
        });
      }

      const prompt = `Compare these two medical reports for patient ${patientName}:
Report A (Previous): ${JSON.stringify(reportA)}
Report B (Current): ${JSON.stringify(reportB)}

Analyze physiological trends, biomarker shifts, and medication updates.
Return JSON strictly:
{
  "summary": "Overall synthesis...",
  "improvements": ["item 1", "item 2"],
  "worsened": ["item 1", "item 2"],
  "newFindings": ["item 1"],
  "medicationChanges": {
    "previous": ["med 1", "med 2"],
    "current": ["med 1", "med 2"]
  },
  "labComparison": [
    { "test": "Test Name", "previous": "val", "current": "val", "change": "Improved|Worsened|Stable|Increased" }
  ],
  "timelineUpdate": "Concise update for longitudinal timeline"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const parsed = JSON.parse(response.text || "{}");
      res.json(parsed);
    } catch (err: any) {
      console.error("AI Compare Error:", err);
      res.status(500).json({ error: err.message || "Comparison failed" });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Enterprise Clinical AI Assistant Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

