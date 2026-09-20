import React, { useState } from 'react';
import { Search, UserPlus, Filter, Shield, ChevronRight, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Patient, PatientStatus } from '../../types/hospital';

interface PatientDirectoryProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
  onRequestAccess: () => void;
}

export const PatientDirectory: React.FC<PatientDirectoryProps> = ({
  patients,
  onSelectPatient,
  onRequestAccess
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [genderFilter, setGenderFilter] = useState<string>('All');

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.uid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.conditions.some((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || patient.status === statusFilter;
    const matchesGender = genderFilter === 'All' || patient.gender === genderFilter;

    return matchesSearch && matchesStatus && matchesGender;
  });

  const getStatusBadge = (status: PatientStatus) => {
    switch (status) {
      case 'Critical':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 animate-pulse">
            <AlertCircle className="w-3.5 h-3.5 mr-1" />
            Critical
          </span>
        );
      case 'High Priority':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
            <Clock className="w-3.5 h-3.5 mr-1" />
            High Priority
          </span>
        );
      case 'Follow-up Required':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
            <Clock className="w-3.5 h-3.5 mr-1" />
            Follow-up Required
          </span>
        );
      case 'Stable':
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <CheckCircle className="w-3.5 h-3.5 mr-1" />
            Stable
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Patient Directory</h1>
          <p className="text-xs text-slate-500 mt-1 font-normal">
            Enterprise longitudinal registry • Click any patient row to open full workspace profile
          </p>
        </div>

        <button
          onClick={onRequestAccess}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          <span>Request Patient Access</span>
        </button>
      </div>

      {/* Filters and Search Bar */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Patient Name, UID (e.g. UID-1001), or condition..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
            />
          </div>

          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
            </span>
            {['All', 'Critical', 'High Priority', 'Follow-up Required', 'Stable'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  statusFilter === status
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">Patient Name</th>
                <th className="py-4 px-6">Patient ID</th>
                <th className="py-4 px-6">Age / Gender</th>
                <th className="py-4 px-6">Primary Conditions</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr
                    key={patient.id}
                    onClick={() => onSelectPatient(patient)}
                    className="hover:bg-blue-50/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-[#0f172a] text-white flex items-center justify-center font-bold text-xs shadow-sm group-hover:bg-blue-600 transition-colors">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                            {patient.name}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {patient.primaryHospital.split(',')[0]}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-mono font-bold text-xs rounded-lg border border-slate-200">
                        {patient.uid}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-xs font-medium text-slate-700">
                      {patient.age} yrs • {patient.gender}
                    </td>

                    <td className="py-4 px-6 max-w-xs">
                      <div className="flex flex-wrap gap-1">
                        {patient.conditions.slice(0, 2).map((c, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded font-medium truncate max-w-[160px]"
                          >
                            {c.name}
                          </span>
                        ))}
                        {patient.conditions.length > 2 && (
                          <span className="inline-block px-1.5 py-0.5 bg-slate-200 text-slate-600 text-[10px] rounded font-bold">
                            +{patient.conditions.length - 2}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      {getStatusBadge(patient.status)}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPatient(patient);
                        }}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold transition-all group-hover:bg-blue-600 group-hover:text-white cursor-pointer"
                      >
                        <span>Open Profile</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500">
                    <p className="text-sm font-medium">No patients matched your search or filter.</p>
                    <p className="text-xs text-slate-400 mt-1">Try resetting filters or request access to a network patient (e.g. UID-1005).</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

