import React from "react";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    {controls.map(index => {
      return (
        <BuildControl
          key={index.label}
          label={index.label}
          added={() => props.ingredientsAdded(index.type)}
          removed={() => props.ingredientsRemoved(index.type)}
          ingredientCount={props.ingredients[index.type]}
        />
      );
    })}
  </div>
);

export default buildControls;
