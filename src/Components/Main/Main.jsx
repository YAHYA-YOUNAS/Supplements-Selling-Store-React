import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Domain from "../Domain/Domain";
import Catalog from "../Catalog/Catalog";
import Messages from "../Messages/Messages";
import NavBar from "../Common Components/NavBar/NavBar";
import LeftPane from "../Common Components/LeftPane/LeftPane";
import BusinessSettings from "../Business Settings/BusinessSettings";
import DesignStudio from "../DesignStudio/DesignStudio";

export default function Main() {
  const [clicked, setClicked] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <NavBar
        clicked={clicked}
        setClicked={setClicked}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />

      <div onClick={() => setClicked(false)}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" index element={<Home />} />
          <Route path="messages" element={<Messages />} />
          <Route path="domain" element={<Domain />} />
          <Route path="businessSettings" element={<BusinessSettings />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="designStudio" element={<DesignStudio />} />
        </Routes>
      </div>

      <LeftPane
        classes={openMenu ? "responsiveLeftPane" : "leftPane"}
        setOpenMenu={setOpenMenu}
      />
    </div>
  );
}
