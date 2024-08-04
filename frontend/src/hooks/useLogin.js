import { useState } from "react";
import { useAuthContext } from "./useContext";

const useLogin = () => {
  const [error, setError] = useState('');
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json);
    } else {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setError(''); // Clear error on successful login
    }
  };

  return { login, error };
};

export { useLogin };

