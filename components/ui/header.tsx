import React from "react";
import ButtonBlack from "@/components/ui/buttonBlack";
import ButtonBordered from "@/components/ui/buttonBordered";
import ButtonDisabled from "@/components/ui/buttonDisabled";

function Header() {
  return (
      <div>header
        <ButtonBlack text="New Button"/>
          <ButtonBordered text="Click"/>
          <ButtonDisabled text="Disabled"/>
      </div>
      )
}

export default Header;
