function cakes(recipe, available) {
  const ingredients = Object.keys(recipe);
  const isAllIngredients = ingredients.every(item => Object.keys(available).includes(item));

  let cake = 0;

  if (isAllIngredients) {
    const totalQuantity = ingredients.reduce((prevIngredient, nextIngredient) => prevIngredient + recipe[nextIngredient], 0);

    // availableIngredients.

    {
      a
    }

    // ingredients.forEach(ingredient => {
    //   let quantity = available[]
    // })
    console.log(totalQuantity)
  } else return 0;

  console.log(ingredients, isAllIngredients); 
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});