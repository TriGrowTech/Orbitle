"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const INITIAL_SPOTS = 96;
const SPOTS_KEY = "orbitle_spots_remaining";

interface SpotsContextType {
  spots: number;
  decrementSpots: () => void;
}

const SpotsContext = createContext<SpotsContextType | undefined>(undefined);

export function SpotsProvider({ children }: { children: React.ReactNode }) {
  const [spots, setSpots] = useState(INITIAL_SPOTS);

  useEffect(() => {
    const saved = localStorage.getItem(SPOTS_KEY);
    if (saved) {
      setSpots(parseInt(saved, 10));
    }
  }, []);

  const decrementSpots = () => {
    setSpots((prev) => {
      const next = prev > 0 ? prev - 1 : 0;
      localStorage.setItem(SPOTS_KEY, next.toString());
      return next;
    });
  };

  return (
    <SpotsContext.Provider value={{ spots, decrementSpots }}>
      {children}
    </SpotsContext.Provider>
  );
}

export function useSpots() {
  const context = useContext(SpotsContext);
  if (context === undefined) {
    throw new Error("useSpots must be used within a SpotsProvider");
  }
  return context;
}
