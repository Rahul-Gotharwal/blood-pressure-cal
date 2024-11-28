"use client"
import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar";
import { RightSideBar } from "./RightSidebar";
import GraphContainer from "./GraphContainer";
import { ScrollAreaDemo } from "./scroll-nav";
import { LabResults } from "./Labresult";
import { fetchAllPatientsData,fetchPatientByName } from "@/lib/axios";
export default function MainComponent({ children }: { children: React.ReactNode }) {
  const [patients, setPatients] = useState<any[]>([]); 
  const [selectedPatient, setSelectedPatient] = useState<any | null>(null); 
  const [diagnosticList, setDiagnosticList] = useState<any[]>([]);
  const [labResults, setLabResults] = useState<string[]>([]); 

  useEffect(() => {
    const fetchPatients = async () => {
      const patientData = await fetchAllPatientsData(); 
    // console.log(patientData)
      setPatients(patientData); 

      if(patientData.length>0){
        const firstPatientData = await fetchPatientByName(patientData[0].name)
        setSelectedPatient(firstPatientData)
        setLabResults(firstPatientData.lab_results || [])
        if(firstPatientData?.diagnostic_list){
          setDiagnosticList(firstPatientData.diagnostic_list)
        }
        
      }
    
    };
    fetchPatients();
  }, []);

  const handleSelectPatient = async (patientName: string) => {
    const patientData = await fetchPatientByName(patientName); 
    if (patientData) {
      setSelectedPatient(patientData); 
      setLabResults(patientData.labResults || [])
    } 
    if (patientData?.diagnostic_list) {
      setDiagnosticList(patientData.diagnostic_list);
    }
    else {
      console.log("No patient data found");
    }
  };

  const formattedBloodPressureData = selectedPatient
    ? selectedPatient.diagnosis_history.map((item: any) => ({
        month: item.month,
        systolic: item.blood_pressure.systolic.value,
        diastolic: item.blood_pressure.diastolic.value,
        range: [
          item.blood_pressure.diastolic.value,
          item.blood_pressure.systolic.value,
        ], 
      }))
    : [];
  
  return (

      <div className="antialiased bg-gray-50">
     
        <div className="h-screen flex flex-col m-10">
          {/* Navbar */}
          <div>
            <Navbar1 />
          </div>

       
          <div className="flex flex-1 mt-4 overflow-hidden bg-white shadow-md rounded-lg">
        
            <div className="w-[300px] bg-gray-100 border-r p-4">
              <ScrollAreaDemo selectedPatientName={selectedPatient?.name || ""}  patients={patients} onSelectPatient={handleSelectPatient}  />
            </div>

            {/* Main Content */}
            <div className="flex-1  bg-gray-50">
            
              {children}
              <GraphContainer
              diagnosticData={
                selectedPatient
                  ? {
                      heart_rate: selectedPatient.diagnosis_history[0]?.heart_rate?.value,
                      respiratory_rate: selectedPatient.diagnosis_history[0]?.respiratory_rate?.value,
                      temperature: selectedPatient.diagnosis_history[0]?.temperature?.value,
                      blood_pressure_data: formattedBloodPressureData,
                      diagnostic_list: selectedPatient.diagnostic_list?.map((diagnostic: any) => ({
                        name: diagnostic?.name,
                        description: diagnostic?.description,
                        status: diagnostic?.status,
                      })),
                      lab_results: selectedPatient.lab_results[0] || [],
                    }
                  : null
              }
            />
            </div>

    
            <div className="w-[400px] flex flex-col bg-gray-100 border-l p-4 space-y-4">
            
              {selectedPatient && <RightSideBar patient={selectedPatient} />}

          
              <LabResults diagnosticLabResult={selectedPatient?.lab_results || []} />
            </div>
          </div>
        </div>
      </div>
  );
}
