import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [userImg, setUserImg] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        loggedInUser,
        setLoggedInUser,
        userImg,
        setUserImg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
