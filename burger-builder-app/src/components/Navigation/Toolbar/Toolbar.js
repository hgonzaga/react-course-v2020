import React from "react";

import classes from "./Toolbar.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToogle from "../SideDrawer/DrawerToogle/DrawerToogle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <DrawerToogle clicked={props.drawerToggleClicked} />
  </header>
);

export default toolbar;
