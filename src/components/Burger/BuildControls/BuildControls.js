import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = ({ addIngredient, removeIngredient, disabled }) => {
  return (
    <div className={classes.BuildControls}>
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
    </div>
  );
};

export default BuildControls;
