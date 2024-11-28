import React from "react";
import { Component } from "./ChartData"; 
interface BloodPressureChartProps {
  data: any
}

export function BloodPressureChart({ data }: BloodPressureChartProps) {
  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h2 className="diagnosis-history-name mb-6">Diagnosis History</h2>
        </div>
        <div
  className="overflow-auto"
  style={{
    background: "#F4F0FE",
    borderRadius: "12px",
    opacity: 1,
  }}
>
  <Component data={data} />
</div>

      </div>
    </div>
  );
}
