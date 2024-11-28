import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table";
  

interface DiagnosticListProps {
  diagnosticList: {
    name: string;
    description: string;
    status: string;
  }[];
}
  export function DiagnosticList({ diagnosticList }: DiagnosticListProps) {
    return (
      <div className="w-full bg-white rounded-2xl shadow-md border border-gray-200 p-4">
     
        <div className="diagnosis-history-name">Diagnostic List</div>
  
     
        <Table className="w-full border-separate border-spacing-y-2">
          <thead>
          
            <TableRow className="bg-gray-100 rounded-2xl">
              <TableCell className="heading">Problem/Diagnosis</TableCell>
              <TableCell className="heading">Description</TableCell>
              <TableCell className="heading">Status</TableCell>
            </TableRow>
          </thead>
          <TableBody>
            {diagnosticList.map((diagnostic, index) => (
              <TableRow key={index} className="bg-white shadow-sm rounded-md">
                <TableCell className="subheading">{diagnostic.name}</TableCell>
                <TableCell className="subheading">{diagnostic.description}</TableCell>
                <TableCell className="subheading">{diagnostic.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  