const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe } = require("../db");
const { Op } = require("sequelize");

const postRecipes = async (name, summary, image, healthScore, steps) =>
  await Recipe.create({ name, summary, image, healthScore, steps });
//-------------------------------------------------------------------
const getRecipeById = async (id, source) => {
  const recipe =
    source === "api"
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
          )
        ).data
      : await Recipe.findByPk(id);
  return recipe;
};
//-------------------------------------------------------------------
const cleanArray = (arr) =>
  arr.map((elem) => {
    return {
      id: elem.id,
      name: elem.title,
      summary: elem.summary,
      image: elem.image,
      healthScore: elem.healthScore,
      steps: elem.instructions,
    };
  });

const getAllRecipes = async () => {
  const dataBaseRecipes = await Recipe.findAll();

  const apiRecipesRaw = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data;

  const apiRecipes = cleanArray(apiRecipesRaw);

  return [...dataBaseRecipes, ...apiRecipes];
};
//-------------------------------------------------------------------
const searchRecipeByName = async (name) => {
  const dataBaseRecipes = await Recipe.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  const apiRecipesRaw = (
    await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    )
  ).data;

  const apiRecipes = cleanArray(apiRecipesRaw);

  const filteredApi = apiRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...filteredApi, ...dataBaseRecipes];
};

module.exports = {
  postRecipes,
  getRecipeById,
  getAllRecipes,
  searchRecipeByName,
};
