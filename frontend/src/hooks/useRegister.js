import { useState } from "react";
import { useAuthContext } from "./useContext";

const useRegister = () => {
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();

  const register = async (email,username, password) => {
    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });

    const json = await response.json();
    console.log(json)

    if (!response.ok) {
      setError(json);
    } else {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setError(""); // Clear error on successful login
    }
};
return { register, error };
};

export { useRegister };
