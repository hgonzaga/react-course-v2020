import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <div style={{ textAlign: "center" }}>
        <Button btnType="Confirm" clicked={props.purchaseContinued}>
          CONTINUE
        </Button>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>
          CANCEL
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
