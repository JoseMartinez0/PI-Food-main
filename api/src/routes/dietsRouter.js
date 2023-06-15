const { Router } = require("express");
const { getDiets } = require("../Controllers/getDietsControllers");
const dietsRouter = Router();

dietsRouter.get("/", getDiets);
//

module.exports = dietsRouter;
