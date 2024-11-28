// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev", // API base URL
  headers: {
    Authorization: "Basic " + Buffer.from("coalition:skills-test").toString("base64"), // Basic Auth encoding
  },
});

export const fetchAllPatientsData = async () => {
  try {
    const response = await axiosInstance.get("/");
    //console.log(response.data)
    return response.data; // Assuming the API returns the patient list
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Fetch patient by name
// Fetch patient by name
export const fetchPatientByName = async (name: string) => {
  try {
    const response = await axiosInstance.get("/");
    const allPatients = response.data; // Assuming all patients are returned here
   // console.log("All Patients:", allPatients); // Log all patients to inspect the structure

    // Ensure proper comparison by using name.toLowerCase() correctly
    const patient = allPatients.find((p: any) => {
      const patientName = p.name.trim().toLowerCase(); // Trim spaces and convert to lowercase
      const searchName = name.trim().toLowerCase(); // Trim spaces and convert to lowercase
     // console.log(`Comparing: ${patientName} with ${searchName}`); // Log comparison for debugging
      return patientName === searchName;
    });

    if (!patient) {
      console.warn(`Patient with name "${name}" not found.`);
      return null;
    }

    console.log(`Data for patient ${name}:`, patient); // Log the found patient
    return patient;
  } catch (error) {
    console.error(`Error fetching data for patient "${name}":`, error);
    return null;
  }
};
