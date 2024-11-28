
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table";
import { DownloadIcon } from "lucide-react";
interface LabResultsProps {
  diagnosticLabResult:string[] 
}
export function LabResults({ diagnosticLabResult }: LabResultsProps) {
  return (
    <>
      <h2 className="diagnosis-history-name mt-5 ml-4">Lab Results</h2>
      <Table className="border border-gray-200 shadow-md rounded-md bg-white">
        <TableBody>
          {diagnosticLabResult.length > 0 ? (
            diagnosticLabResult.map((result, index) => (
              <TableRow key={index}>
                <TableCell>{result}</TableCell>
                <TableCell className="text-right">
                    <DownloadIcon className="ml-28" />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2}>No lab results available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}