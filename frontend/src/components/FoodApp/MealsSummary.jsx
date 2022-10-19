import React from "react";
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>The best food for you</h2>
      <p>
        Choose your favourite meal and enjoy your lunch or another meal.
      </p>
      <p>
        We provide only the best meals at the market. You will taste this high-quality ingredients.
      </p>
    </section>
  );
};

export default MealsSummary;
