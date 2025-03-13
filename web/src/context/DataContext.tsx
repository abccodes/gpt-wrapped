import React, { createContext, useContext, useState } from "react";

interface DataContextType {
  highestDay: Record<string, any> | null;
  highestMonth: Record<string, any> | null;
  highestYear: Record<string, any> | null;
  setData: (data: any) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [highestDay, setHighestDay] = useState<Record<string, any> | null>(
    null
  );
  const [highestMonth, setHighestMonth] = useState<Record<string, any> | null>(
    null
  );
  const [highestYear, setHighestYear] = useState<Record<string, any> | null>(
    null
  );

  const setData = (data: any) => {
    setHighestDay(data.highestDay || null);
    setHighestMonth(data.highestMonth || null);
    setHighestYear(data.highestYear || null);
  };

  return (
    <DataContext.Provider
      value={{ highestDay, highestMonth, highestYear, setData }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for easier access to data
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
