import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "../context/UserContext";

export const Dashboard = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};
