import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () =>{
  const displayDesktop = () => {
    return <Toolbar>{displayLogo}</Toolbar>;
  };

  const displayLogo = (
    <Typography variant="h6" component="h1">
      Rick and Morty Characters
    </Typography>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
};
export default Header;