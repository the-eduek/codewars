function cakes(recipe, available) {
  const ingredients = Object.keys(recipe);

  // all ingredients checks that all items in the recipe is present in the given array
  const isAllIngredients = ingredients.every(item => Object.keys(available).includes(item));

  let cake = 0;

  if (isAllIngredients) {
    const recipeQuantity = ingredients.reduce((prevIngredient, nextIngredient) => prevIngredient + recipe[nextIngredient], 0);

    let x = 1;

    while (x > 0) {
      let fullCake = 0;

      ingredients.forEach(ingredient => {
        if (available[ingredient] >= recipe[ingredient]) {
          fullCake = fullCake + recipe[ingredient];
          available[ingredient] = available[ingredient] - recipe[ingredient];
        } else return;
      });

      if (fullCake === recipeQuantity) {
        cake++;
      } else break;
    }
  }
  
  return cake;
}

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
console.log("cakes: " + cakes({flour: 0, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));