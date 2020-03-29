import React from "react";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <div className={classes.Title}>Add ingredients</div>
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
    <div className={classes.Price}>
      Total Price: <strong>{props.price.toFixed(2)} €</strong>
    </div>
  </div>
);

export default buildControls;
