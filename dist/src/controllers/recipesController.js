"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getRecipes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield prisma.recipe.findMany();
    res.json(recipes);
});
const getRecipeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const recipe = yield prisma.recipe.findUnique({
        where: { id: Number(id) }
    });
    res.json(recipe);
});
const createRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, steps, description, ingredients } = req.body;
    const ingredientData = ingredients.map((ingredient) => {
        return {
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit
        };
    });
    const recipe = yield prisma.recipe.create({
        data: {
            name: name,
            steps: steps,
            description: description,
            ingredients: {
                create: ingredientData
            }
        }
    });
    res.json(recipe);
});
exports.default = {
    getRecipes,
    getRecipeById,
    createRecipe
};
