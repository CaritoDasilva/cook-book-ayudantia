const mongoose = require('mongoose');
const RecipeSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Receta debe tener un título"],
        minlength: [3, "Receta debe tener mínimo de 3 caracteres"]
    },
    ingredients: { 
        type: String,
        required: [true, "Receta debe tener ingredientes"],
        minlength: [3, "Ingredientes debe tener mínimo de 3 caracteres"]
    },
    steps: {
        type: String,
        required: [true, "Receta debe tener los pasos a seguir"],
        minlength: [3, "Receta debe tener mínimo de 3 caracteres"]
    },
    cook_time: {
        type: Number,
        required: [true, "Receta debe tener los pasos a seguir"],
    }

}, { timestamps: true });
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;