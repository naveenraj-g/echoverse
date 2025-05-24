"use client";

import { createContext, useContext, useState } from "react";

interface stateType {
  userId: string;
  chatId: string;
}

type IdentifierContextType = {
  identifier: stateType[];
  setIdentifierData: (data: stateType) => void;
};

const IdentifierContext = createContext<IdentifierContextType | undefined>(
  undefined
);

export const ChannelJoinIdentifierProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [identifier, setIdentifier] = useState<stateType[] | []>([]);

  function setIdentifierData(data: stateType): void {
    if (data) {
      setIdentifier((prevState) => [...prevState, data]);
      return;
    }
    setIdentifier([]);
  }

  return (
    <IdentifierContext.Provider value={{ identifier, setIdentifierData }}>
      {children}
    </IdentifierContext.Provider>
  );
};

export const useIdentifier = () => {
  const context = useContext(IdentifierContext);
  if (!context) {
    throw new Error(
      "useIdentifier must be used within a ChannelJoinIdentifierProvider"
    );
  }
  return context;
};
