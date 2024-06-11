import React, { createContext, useState } from 'react';

export const UserPointsContext = createContext();

export const UserPointsProvider = ({ children }) => {
  const [userPoints, setUserPoints] = useState(0); // if store db, need fetch from db

  return (
    <UserPointsContext.Provider value={{ userPoints, setUserPoints }}>
      {children}
    </UserPointsContext.Provider>
  );
};
