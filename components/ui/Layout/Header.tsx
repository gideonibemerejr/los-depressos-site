"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

import { navigation } from "@/constants";

const Header = () => {
  const currentRoute = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50  pb-4">
      <div className="mx-auto max-w-8xl">
        <div className="px-4 pt-6  lg:pl-4 lg:pr-0">
          <Navbar
            currentRoute={currentRoute}
            navigation={navigation}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>
      <MobileNav
        currentRoute={currentRoute}
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
