import React, { createContext, useContext, useState } from "react";

// Create a context for the app
const AppContext = createContext();

// Provider component
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
      updated: "Updated 2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "Updated 5 days ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "Updated 3 days ago",
    },
  ]);

  // Data for the Left Authentication Page
  const Left_Auth_Page_Data = {
    title: "AI to Detect & Autofix Bad Code",
    statistics: [
      { label: "Language Support", value: "30+" },
      { label: "Developers", value: "10K+" },
      { label: "Hours Saved", value: "100K+" },
      { label: "Issues Fixed", value: "500K+" },
    ],
    value: "500K+",
  };

  // Data for the Right Authentication Page
  const Right_Auth_Page_Data = {
    title: "Welcome to CodeAnt AI",
    imageData: [
      { id: 1, src: "/social_icons/Azure Devops.png", alt: "Azure Devops" },
      { id: 2, src: "/social_icons/Bitbucket.png", alt: "Bitbucket" },
      { id: 3, src: "/social_icons/Github.png", alt: "Github" },
      { id: 4, src: "/social_icons/GitLab.png", alt: "GitLab" },
    ],
    Sign_Text: [
      "Sign in with Github",
      "Sign in with Azure Devops",
      "Sign in with Bitbucket",
      "Sign in with GitLab",
      "Sign in with SSO",
    ],
    imageData2: [
      { id: 5, src: "/social_icons/GitLab.png", alt: "GitLab" },
      { id: 6, src: "/social_icons/SSO.png", alt: "SSO" },
    ],
  };

  return (
    <AppContext.Provider
      value={{ 
        repositories, 
        setRepositories, 
        Left_Auth_Page_Data, 
        Right_Auth_Page_Data 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
