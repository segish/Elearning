import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null);

  const refreshUser = async (user) => {
    setCurrentUser(user)
  };

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await makeRequest.post("auth/refresh")
        setCurrentUser(res.data || null)
        localStorage.setItem("user", JSON.stringify(res.data) || null)
      } catch (err) {
        console.log(err.response.data)
        setCurrentUser(null)
        localStorage.setItem("user", null)
      }
    };
    fetchUser();
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};
