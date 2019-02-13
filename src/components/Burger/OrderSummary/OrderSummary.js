import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ ingredients, purchaseCanceled, purchaseContinue }) => {
  const ingredientSummary = Object.keys(ingredients).map(ingredientKey => {
    return (
      <li key={ingredientKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:{' '}
        {ingredients[ingredientKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinue}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
