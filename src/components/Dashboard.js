import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "../context/UserContext";

export const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};
