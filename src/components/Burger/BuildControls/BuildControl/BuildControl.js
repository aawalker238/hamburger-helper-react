import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = ({ label, add, remove, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button onClick={remove} className={classes.Less} disabled={disabled}>
        Less
      </button>
      <button onClick={add} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
