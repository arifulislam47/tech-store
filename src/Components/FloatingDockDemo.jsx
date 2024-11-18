import React from "react";
import { FloatingDock } from "../Components/ui/floating-dock";
import { Link } from "react-router-dom";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Visa",
      icon: (
        <Link to={``}>
          <img className="" src="/src/assets/Visa.png" alt="" />
        </Link>
      ),
    },

    {
      title: "MasterCard",
      icon: (
        <Link to={``}>
          <img className=" w-12" src="/src/assets/MasterCard.png" alt="" />
        </Link>
      ),
    },
    {
      title: "Discover",
      icon: (
        <Link to={``}>
          <img className=" w-12" src="/src/assets/Discover.png" alt="" />
        </Link>
      ),
    },
    {
      title: "Paypal",
      icon: (
        <Link to={``}>
          <img className=" w-12" src="/src/assets/Paypal.png" alt="" />
        </Link>
      ),
    },
    {
      title: "AmericanEx",
      icon: (
        <Link to={``}>
          <img className=" w-12" src="/src/assets/AmericanEx.png" alt="" />
        </Link>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center h-[3rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
