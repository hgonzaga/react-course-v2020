import React from "react";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((index) => {
      return (
        <BuildControl
          key={index.label}
          label={index.label}
          added={() => props.ingredientsAdded(index.type)}
          removed={() => props.ingredientsRemoved(index.type)}
          ingredientCount={props.ingredients[index.type]}
          disabled={props.disabled[index.type]}
        />
      );
    })}
    <div className={classes.Price}>
      Total Price: <strong>{props.price.toFixed(2)} €</strong>
    </div>
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
