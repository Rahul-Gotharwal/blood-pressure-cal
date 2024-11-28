import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
}

interface ScrollAreaDemoProps {
  patients: Patient[];

  onSelectPatient: (name: string) => void; 
  selectedPatientName: string; 
}
export function ScrollAreaDemo({
  patients,
  onSelectPatient,
  selectedPatientName
}: ScrollAreaDemoProps) {
  const handlePatientSelect = (name:string)=>{
    onSelectPatient(name)
  }
  return (
    <>
      <div className="flex items-center justify-between mb-4 cursor-pointer">
        <h4 className="diagnosis-history-name">Patients</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.995"
          height="18"
          viewBox="0 0 17.995 18"
        >
          <path
            id="search_FILL0_wght300_GRAD0_opsz24"
            d="M142.675-811.574a6.293,6.293,0,0,1-4.626-1.895,6.293,6.293,0,0,1-1.895-4.626,6.293,6.293,0,0,1,1.895-4.626,6.293,6.293,0,0,1,4.626-1.895,6.293,6.293,0,0,1,4.626,1.895,6.293,6.293,0,0,1,1.895,4.626,6.254,6.254,0,0,1-.383,2.182,6.1,6.1,0,0,1-1.023,1.808l6.135,6.135a.773.773,0,0,1,.227.557.754.754,0,0,1-.227.567.765.765,0,0,1-.562.232.765.765,0,0,1-.562-.232l-6.135-6.135a6.1,6.1,0,0,1-1.839,1.033,6.318,6.318,0,0,1-2.151.373Zm0-1.6a4.749,4.749,0,0,0,3.491-1.43,4.749,4.749,0,0,0,1.43-3.491,4.749,4.749,0,0,0-1.43-3.491,4.749,4.749,0,0,0-3.491-1.43,4.749,4.749,0,0,0-3.491,1.43,4.749,4.749,0,0,0-1.43,3.491,4.749,4.749,0,0,0,1.43,3.491A4.749,4.749,0,0,0,142.675-813.173Z"
            transform="translate(-136.155 824.614)"
            fill="#072635"
          />
        </svg>
      </div>

      <ScrollArea className="h-[500px] w-full rounded-md border mt-2 cursor-pointer">
        <div className="p-4">
          {patients.map((patient, index) => (
            <React.Fragment key={index}>
              <div className={`flex items-center justify-between py-2 px-4 rounded-md cursor-pointer
               ${
                selectedPatientName === patient.name
                  ? "active-state" 
                  : "hover-state" 
              }
            `}
                
                onClick={() => onSelectPatient(patient.name)}
              >
                <div className="flex items-center">
                  <img
                    src={patient.profile_picture}
                    alt={patient.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                   
                    <p className="patient-name">{patient.name}</p>
              
                    <p className="patient-info">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
             
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="3.714"
                    viewBox="0 0 18 3.714"
                  >
                    <path
                      id="more_horiz_FILL0_wght300_GRAD0_opsz24"
                      d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z"
                      transform="translate(-189.233 539.999)"
                      fill="#072635"
                    />
                  </svg>
                </div>
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}
