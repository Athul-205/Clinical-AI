import React, { useState } from 'react';
import { X, KeyRound, ShieldCheck, CheckCircle2, AlertCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { networkPatientsRegistry } from '../../data/patientRegistry';
import { Patient } from '../../types/hospital';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccessGranted: (newPatient: Patient) => void;
  existingPatientIds: string[];
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  isOpen,
  onClose,
  onAccessGranted,
  existingPatientIds
}) => {
  const [uidInput, setUidInput] = useState('UID-1005');
  const [step, setStep] = useState<'enter_uid' | 'verify_otp' | 'success'>('enter_uid');
  const [foundPatient, setFoundPatient] = useState<Patient | null>(null);
  const [otpInput, setOtpInput] = useState('1234');
  const [errorMsg, setErrorMsg] = useState('');
  const [otpSentMsg, setOtpSentMsg] = useState(false);

  if (!isOpen) return null;

  const handleLookupUID = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const cleaned = uidInput.trim().toUpperCase();

    if (existingPatientIds.includes(cleaned)) {
      setErrorMsg('This patient is already accessible in your Patient Directory.');
      return;
    }

    const matched = networkPatientsRegistry[cleaned];
    if (matched) {
      setFoundPatient(matched);
      setStep('verify_otp');
      setOtpSentMsg(false);
    } else {
      // Create a simulated patient on the fly if user enters any UID-10xx
      const simulated: Patient = {
        ...networkPatientsRegistry['UID-1005'],
        id: `patient-${cleaned.toLowerCase()}`,
        uid: cleaned,
        name: cleaned === 'UID-1008' ? 'Deepa K' : `Network Patient (${cleaned})`,
        phoneMasked: '+91 98102 7****'
      };
      setFoundPatient(simulated);
      setStep('verify_otp');
      setOtpSentMsg(false);
    }
  };

  const handleSendOtp = () => {
    setOtpSentMsg(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpInput || otpInput.length < 4) {
      setErrorMsg('Please enter a valid 4-digit demo OTP (e.g. 1234).');
      return;
    }
    if (foundPatient) {
      setStep('success');
      setTimeout(() => {
        onAccessGranted(foundPatient);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-base">Request Patient Access (Consent Verification)</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 'enter_uid' && (
            <form onSubmit={handleLookupUID} className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed">
                <span className="font-bold">Healthcare Consent Protocol:</span> Enter the patient's Unique Hospital ID (UID). A One-Time Password (OTP) will be sent to their registered mobile number to authorize secure record sharing.
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Unique Patient ID (UID)
                </label>
                <input
                  type="text"
                  value={uidInput}
                  onChange={(e) => setUidInput(e.target.value)}
                  placeholder="e.g. UID-1005 or UID-1008"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-base font-bold text-slate-900"
                  required
                />
                <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
                  <span>Try demo IDs: <button type="button" onClick={() => setUidInput('UID-1005')} className="text-teal-600 font-bold underline">UID-1005</button> (Suresh Verma) or <button type="button" onClick={() => setUidInput('UID-1008')} className="text-teal-600 font-bold underline">UID-1008</button> (Deepa K)</span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all flex items-center space-x-2"
                >
                  <span>Lookup Patient</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 'verify_otp' && foundPatient && (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">Patient Found</span>
                  <span className="px-2 py-0.5 bg-teal-100 text-teal-800 font-bold text-xs rounded font-mono">
                    {foundPatient.uid}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{foundPatient.name}</h4>
                <div className="flex items-center text-xs text-slate-600 space-x-3 pt-1 border-t border-slate-200/60">
                  <span>Age: {foundPatient.age}</span>
                  <span>•</span>
                  <span>Gender: {foundPatient.gender}</span>
                  <span>•</span>
                  <span className="flex items-center text-indigo-700 font-medium">
                    <PhoneCall className="w-3.5 h-3.5 mr-1" />
                    {foundPatient.phoneMasked}
                  </span>
                </div>
              </div>

              {!otpSentMsg ? (
                <div className="text-center py-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                  <KeyRound className="w-8 h-8 text-indigo-600 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs text-slate-700 font-medium mb-3">
                    Click below to send a verification OTP to <span className="font-mono font-bold">{foundPatient.phoneMasked}</span>
                  </p>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow transition-all"
                  >
                    Send Consent OTP
                  </button>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-bold">Demo OTP Sent Successfully!</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Enter 4-Digit Consent OTP
                    </label>
                    <input
                      type="text"
                      value={otpInput}
                      onChange={(e) => setOtpInput(e.target.value)}
                      placeholder="Enter 1234"
                      maxLength={6}
                      className="w-full text-center tracking-widest text-xl font-mono font-bold py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-slate-50"
                      required
                    />
                    <p className="text-[11px] text-slate-400 mt-1 text-center">
                      Hackathon Demo Mode: Pre-filled with valid verification code <span className="font-mono font-bold text-slate-700">1234</span>
                    </p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <p className="text-xs text-rose-600 font-medium text-center">{errorMsg}</p>
              )}

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setStep('enter_uid')}
                  className="text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={!otpSentMsg}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs shadow-md transition-all flex items-center space-x-2 ${
                    otpSentMsg
                      ? 'bg-teal-600 hover:bg-teal-500 text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify & Grant Access</span>
                </button>
              </div>
            </form>
          )}

          {step === 'success' && foundPatient && (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Patient Consent Verified!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                <span className="font-bold text-slate-900">{foundPatient.name}</span> ({foundPatient.uid}) has been authorized and added to Dr. Arjun's Patient Directory.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs font-mono text-slate-500 border border-slate-200/80">
                Encrypted EMR link established • 256-bit AES Token
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

