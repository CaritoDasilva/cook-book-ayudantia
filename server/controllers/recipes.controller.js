const Recipe = require("../models/recipe.model")

module.exports.findAllRecipes = (req, res) => {
    Recipe.find()
        .then(allRecipes => res.json({ recipes: allRecipes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleRecipe = (req, res) => {
    Recipe.findOne({ _id: req.params.id })
        .then(oneSingleRecipe => res.json({ recipe: oneSingleRecipe }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewRecipe = (req, res) => {
    console.log("🚀 ~ file: recipes.controller.js ~ line 19 ~ req.body.data", req.body.data)
    Recipe.create(req.body.data)
        .then(newlyCreatedRecipe => res.json({ recipe: newlyCreatedRecipe }))
        .catch(err => {
        console.log("🚀 ~ file: recipes.controller.js ~ line 19 ~ err", err)
            return res.status(400).json(err)
        })
};

module.exports.updateExistingRecipe = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id }, req.body.data, { new: true })
        .then(updatedRecipe => {
            return res.json({ recipe: updatedRecipe })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingRecipe = (req, res) => {
    Recipe.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};