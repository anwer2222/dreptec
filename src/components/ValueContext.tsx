"use client"
// ValueContext.tsx
import React, { createContext, useContext, useState } from 'react';

export const ValueContext = createContext<{
  value: [number,boolean,string];
  setValue: React.Dispatch<React.SetStateAction<[number,boolean,string]>>;
  isFormOpen: boolean;
  setIsFormOpen:React.Dispatch<React.SetStateAction<boolean>>
} | undefined>(undefined);

export const ValueProvider = ({ children }: {children: React.ReactNode}) => {
  const [value, setValue] = useState<[number,boolean,string]>([33,false,""]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <ValueContext.Provider value={{ value, setValue,isFormOpen, setIsFormOpen }}>
      {children}
    </ValueContext.Provider>
  );
};

export const useValue = () => {
  const context = useContext(ValueContext);
  if (!context) {
    throw new Error('useValue must be used within a ValueProvider');
  }
  return context;
};