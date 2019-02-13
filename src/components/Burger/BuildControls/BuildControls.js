import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = ({
  addIngredient,
  removeIngredient,
  disabled,
  price,
  purchasable,
  clearItems,
  ordered
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${price.toFixed(2)}</strong>{' '}
        <span onClick={clearItems} className={classes.Clear}>
          &#10006;
        </span>
      </p>
      {controls.map(control => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            add={() => addIngredient(control.type)}
            remove={() => removeIngredient(control.type)}
            disabled={disabled[control.type]}
          />
        );
      })}
      <button
        onClick={ordered}
        disabled={!purchasable}
        className={classes.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
