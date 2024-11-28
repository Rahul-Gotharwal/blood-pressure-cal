"use client"
import React from "react";
import { Calendar, Phone, User, ShieldCheck } from "lucide-react";
export function RightSideBar({ patient }: { patient: any }) {
  if (!patient) {
    return <div>Loading...</div>;  
  }
  return (
    <>
    <div className=" h-full bg-white border-l p-6 rounded-2xl mr-4">

      <div className="flex flex-col items-center">
        <img
         src={patient.profile_picture}
         alt={`${patient.name}'s profile`}
          className="w-24 h-24 rounded-full border-2 border-gray-200 mb-4"
        />
        <h4 className="particular-patient-name">{patient.name}</h4>
       
      </div>

     
      <div className="mt-6 space-y-4">
       
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-gray-500" />
          <div>
            <p className="patient-dob">Date of Birth</p>
            
            <p className="patient-contact-info mt-2">{patient.date_of_birth}</p>
          </div>
        </div>

     
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-gray-500" />
          <div>
            <p className="patient-dob">Gender</p>
            <p className="patient-contact-info mt-2" >{patient.gender}</p>
          </div>
        </div>

     
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-500" />
          <div>
            <p className="patient-dob">Contact Info</p>
            <p className="patient-contact-info mt-2">{patient.phone_number}</p>
          </div>
        </div>

    
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gray-500" />
          <div>
            <p className="patient-dob">Emergency Contact</p>
            <p className="patient-contact-info mt-2">{patient.emergency_contact}</p>
          </div>
        </div>

      
        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-gray-500" />
          <div>
            <p className="patient-dob">Insurance Provider</p>
            <p className="patient-contact-info mt-2">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

   
      <div className="mt-6 ml-10">
        <button className="button-style">
          Show All Information
        </button>
      </div>
      
    </div>
    
   
  
  </>
  );
}
