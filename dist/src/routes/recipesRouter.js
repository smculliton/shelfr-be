"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipesRouter = void 0;
const express_1 = require("express");
const recipesController_1 = __importDefault(require("../controllers/recipesController"));
exports.recipesRouter = (0, express_1.Router)();
exports.recipesRouter.get('/', recipesController_1.default.getRecipes);
