"use client"
// ValueContext.tsx
import React, { createContext, useContext, useState } from 'react';

export const ValueContext = createContext<{
  value: [number];
  setValue: React.Dispatch<React.SetStateAction<[number]>>;
} | undefined>(undefined);

export const ValueProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState<[number]>([33]);
  return (
    <ValueContext.Provider value={{ value, setValue }}>
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