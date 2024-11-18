import React, { useEffect, useState } from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./layers/Root";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import app from "./firebaseConfig.js";
import TermsConditions from "./pages/TermsConditions.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuth } from "./AuthContext.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import HoverEffect from "./Components/HoverEffect.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/contact us" element={<ContactUs />} />
      <Route path="/customer Login" element={<Login />} />
      <Route path="/terms & conditions" element={<TermsConditions />} />
      <Route path="/shopping cart" element={<ShoppingCart />} />
    </Route>
  )
);

const App = () => {
  const auth = getAuth();
  const { setIsLogin, isLogin, userImg, setLoggedInUser, setUserImg } =
    useAuth();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in: True");
      } else {
        console.log("User is logged in: false");
      }
    });

    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [auth]);

  return (
    <div>
      {loading ? (
        <div className=" center h-dvh">
          <HoverEffect />
        </div>
      ) : (
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      )}
    </div>
  );
};

export default App;
