const { Router } = require("express");
const {
  getRecipesByIdHandler,
  getRecipesByNameHandler,
  postRecipesHandler,
} = require("../handlers/recipesHandlers");

const recipesRouter = Router();

recipesRouter.get("/:id", getRecipesByIdHandler);

recipesRouter.get("/name", getRecipesByNameHandler);

recipesRouter.post("/", postRecipesHandler);

module.exports = recipesRouter;
