import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { useUser } from "@clerk/clerk-react";

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [showAgencyReq, setShowAgencyReq] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const { user } = useUser();

  const getProperties = () => {
    setProperties(dummyProperties);
  };

  useEffect(() => {
    getProperties();
  }, []);

  const value = {
    navigate,
    properties,
    user,
    showAgencyReq,
    setProperties,
    setShowAgencyReq,
    isOwner,
    setIsOwner,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
