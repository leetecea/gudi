import React, { useState } from "react";
import Header from "../../Components/Header";
import MenuMobile from "../../Components/MenuMobile";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState();

  return (
    <>
      {/* <MenuMobile /> */}
      <Header />
    </>
  );
}
