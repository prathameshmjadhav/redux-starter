import { pipe } from 'lodash/fp';

console.log('Hello World!');

//input = { tag: “JAVASCRIPT” } output = “(javascript)”

// recipe = { name: “Spaghetti Bolognese”, ingredients: [“egg”, “salt”] }
// Assuming that this object is immutable, write code to
//  -Add a new ingredient (“cream”)
//  -Replace “egg” with “egg white”
//  -Remove an ingredient (“egg”)

const language = '  JAVASCRIPT  ';
const recipe = { name: 'Spaghetti Bolognese', ingredients: ['egg', 'salt'] };

const trimIt = (language) => language.trim();
const lowerCase = (trimIt) => trimIt.toLowerCase();
const wrap = (lowerCase) => `(${lowerCase})`;

const transform = pipe(trimIt, lowerCase, wrap);
console.log(transform(language));

console.log(recipe);

const updateRecipe = { ...recipe };

const addCream = {
  ...recipe,
  ingredients: [...updateRecipe.ingredients, 'cream'],
};

console.log(addCream);

const replaceEgg = {
  ...updateRecipe,
  ingredients: updateRecipe.ingredients.map((ingredient) =>
    ingredient === 'egg' ? 'egg white' : ingredient
  ),
};
console.log(replaceEgg);

const removeEgg = {
  ...recipe,
  ingredients: recipe.ingredients.filter((ingredient) => ingredient !== 'egg'),
};

console.log(removeEgg);

//paste this code in index.js to run
