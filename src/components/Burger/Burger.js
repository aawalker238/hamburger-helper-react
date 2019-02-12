import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  let ingredientList = Object.keys(ingredients)
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);
  console.log(ingredientList);
  if (ingredientList.length === 0) {
    ingredientList = <p>Please add ingredients...</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientList}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
