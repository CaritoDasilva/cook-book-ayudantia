const RecipeController = require("../controllers/recipes.controller");

module.exports = app => {
    app.get("/api/recipes/", RecipeController.findAllRecipes);
    app.get("/api/recipes/:id", RecipeController.findOneSingleRecipe);
    app.post("/api/recipes/new", RecipeController.createNewRecipe);
    app.put("/api/recipes/update/:id", RecipeController.updateExistingRecipe);
    app.delete("/api/recipes/delete/:id", RecipeController.deleteAnExistingRecipe);
};