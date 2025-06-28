import recipes from './recipe.mjs';


const container = document.getElementById('recipe-container');
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');


function displayRecipes(recipeList) {
  container.innerHTML = ''; 

  if (recipeList.length === 0) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }

  recipeList.forEach(recipe => {
    const article = document.createElement('div');
    article.className = 'media-card';
    article.innerHTML = `
      <div class="media-card__image">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
      <div class="media-card__content">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <p><strong>Tags:</strong> ${recipe.tags?.join(', ')}</p>
      </div>
    `;
    container.appendChild(article);
  });
}


function searchRecipes(query) {
  const lowerQuery = query.toLowerCase();
  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(lowerQuery) ||
    recipe.description.toLowerCase().includes(lowerQuery) ||
    recipe.tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    recipe.recipeIngredient?.some(ing => ing.toLowerCase().includes(lowerQuery))
  );
}

function showRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  displayRecipes([recipes[randomIndex]]);
}


searchBtn.addEventListener('click', () => {
  const query = searchBox.value.trim();
  const results = searchRecipes(query);
  displayRecipes(results);
});


searchBox.addEventListener('input', () => {
  const query = searchBox.value.trim();
  const results = searchRecipes(query);
  displayRecipes(results);
});


showRandomRecipe();
