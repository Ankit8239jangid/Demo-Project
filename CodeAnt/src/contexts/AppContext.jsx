import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [repositories, setRepositories] = useState([
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "Updated 1 day ago",
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "JavaScript",
      size: "5871 KB",
      updated: "Updated 2 day ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "Updated 5 day ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: " Updated 3 day ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "HTML/CSS",
      size: "3096 KB",
      updated: " Updated 6 day ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: " Updated 3 day ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: " Updated 3 day ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: " Updated 3 day ago",
    },
    
  
  
   
  ]);

  return (
    <AppContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
