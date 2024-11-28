import React, { ReactNode } from "react";

interface DiagnosticCardProps {
  title: string;
  value: string;
  description: string;
  iconUrl: ReactNode; 
}

export const DiagnosticCard: React.FC<DiagnosticCardProps> = ({
  title,
  value,
  description,
  iconUrl,
}) => {
  return (
    <div className="p-4 border rounded shadow-md flex items-center space-x-4">
      <div className="w-12 h-12 flex justify-center items-center">
        {typeof iconUrl === "string" ? (
          <img src={iconUrl} alt={`${title} icon`} />
        ) : (
          iconUrl
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{value}</p>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
    </div>
  );
};
