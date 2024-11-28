"use client";
import { Line, LineChart, XAxis, YAxis, Tooltip, Legend} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// TypeScript Interface for Chart Data
interface ChartData {
  month: string;
  systolic: number;
  diastolic: number;
  range: [number, number]; // New: range between systolic and diastolic
}
interface ComponentProps {
  data: ChartData[];
}

export function Component({ data }: ComponentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blood Pressure Analysis</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="overflow-auto">
          <LineChart
            data={data}
            width={900}
            height={400} 
            margin={{
              top: 20,
              right: 40,
              left: 40,
              bottom: 20,
            }}
          >
      
     
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
           
            <YAxis
              domain={["auto", "auto"]}
              tickFormatter={(value) => `${value}`}
              tickLine={false}
              axisLine={false}
            />
            
            <Tooltip />
         
            <Legend />
          
            <Line
              type="monotone"
              dataKey="systolic"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              name="Systolic"
              dot={false}
            />
          
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              name="Diastolic"
              dot={false}
            />
           
            <Line
              type="monotone"
              dataKey="range"
              stroke="none"
              fill="rgba(0, 123, 255, 0.2)"
              name="Range"
            />
          </LineChart>
        </div>
      </CardContent>
    </Card>
  );
}
