fetch("recipes.json")
  .then(response => response.json())
  .then(data => {
    const recipeContainer = document.querySelector(".recipe-container");
    data.forEach((recipe, index) => {
      const recipeElement = document.createElement("a");
      recipeElement.classList.add("recipe");
      recipeElement.href = `recipe.html?id=${index + 1}`;
      recipeElement.innerHTML = `
        <h2 class="recipe-title">${recipe.title}</h2>
        <div class="recipe-image" style="background-image: url(${recipe.image})"></div>
      `;
      recipeContainer.appendChild(recipeElement);
    });
  });
