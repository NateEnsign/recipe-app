import React from 'react'

import styles from './RecipeCard.module.css'

const RecipeCard = () => {
    return (
      <div className={styles.recipe_card}>
        <div>
          <div className={styles.recipe_img_container}>
            {<img src="https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg" />}
          </div>
          <h3>German Chocolate Cake</h3>
        </div>
        <button className="blue-btn">See More</button>
      </div>
    );
  };

export default RecipeCard