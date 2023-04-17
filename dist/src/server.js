"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipesRouter_1 = require("./routes/recipesRouter");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, this is Express + TypeScript');
});
app.get('/recipes', (req, res) => {
    res.send('Hello, this is Express + TypeScript');
});
app.use('/api/v1/recipes', recipesRouter_1.recipesRouter);
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
