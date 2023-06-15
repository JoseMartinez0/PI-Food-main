const {
  postRecipes,
  getRecipeById,
  getAllRecipes,
  searchRecipeByName,
} = require("../Controllers/recipesControllers");

const getRecipesByIdHandler = async (req, res) => {
  //el typeof de Nan es Number. Entonces puedo utilizar isNan.
  const { id } = req.params;
  const source = isNan(id) ? "bdd" : "api";
  try {
    const recipe = await getRecipeById(id, source);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getRecipesByNameHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await searchRecipeByName(name)
      : await getAllRecipes();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postRecipesHandler = async (req, res) => {
  try {
    const { name, summary, image, healthScore, steps } = req.body;
    const newRecipe = await postRecipes(
      name,
      summary,
      image,
      healthScore,
      steps
    );
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getRecipesByIdHandler,
  postRecipesHandler,
  getRecipesByNameHandler,
};
