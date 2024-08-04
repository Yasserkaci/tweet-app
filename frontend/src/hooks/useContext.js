import { useContext } from "react";
import { userContext } from "../context/userContext";

export const useAuthContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw Error("useAuthContext must be used under UserContextProvider ");
  }

  return context;
};
