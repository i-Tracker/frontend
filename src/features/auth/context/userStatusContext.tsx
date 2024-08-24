'use client';

import { createContext, useContext, useState } from 'react';

interface UserStatusContextType {
  isFirstTimeUser: boolean;
  setIsFirstTimeUser: (value: boolean) => void;
}

const UserStatusContext = createContext<UserStatusContextType | undefined>(undefined);

export const UserStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState<boolean>(false);

  return (
    <UserStatusContext.Provider value={{ isFirstTimeUser, setIsFirstTimeUser }}>{children}</UserStatusContext.Provider>
  );
};

export const useUserStatus = () => {
  const context = useContext(UserStatusContext);
  if (context === undefined) {
    throw new Error('useUserStatus must be used within a UserStatusProvider');
  }
  return context;
};
