import React from "react";

import classes from "./DrawerToggle.module.css";

const drawerToogle = (props) => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    <div className={classes.Top} />
    <div className={classes.Middle} />
    <div className={classes.Bottom} />
  </div>
);

export default drawerToogle;
