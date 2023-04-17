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
const prisma = new client_1.PrismaClient;
const recipeData = [
    {
        name: 'Peanut Butter Cookies',
        steps: [
            'Mix all ingredients together',
            'Bake at 350 degrees for 10 minutes'
        ],
        description: 'Super simple three ingredient peanut butter cookies!',
        ingredients: {
            create: [
                {
                    name: 'Peanut Butter',
                    amount: 1,
                    unit: 'cup'
                },
                {
                    name: 'Sugar',
                    amount: 1,
                    unit: 'cup'
                },
                {
                    name: 'Egg',
                    amount: 1,
                    unit: 'whole'
                }
            ]
        }
    },
    {
        name: 'Peanut Butter Jelly Sandwich',
        steps: [
            'Spread peanut butter on one slice of bread',
            'Spread jelly on the other slice of bread',
            'Put the slices together'
        ],
        description: 'Super simple three ingredient peanut butter jellies!',
        ingredients: {
            create: [
                {
                    name: 'Peanut Butter',
                    amount: 3,
                    unit: 'tbsp'
                },
                {
                    name: 'Grape Jelly',
                    amount: 3,
                    unit: 'tbsp'
                },
                {
                    name: 'White Bread',
                    amount: 2,
                    unit: 'slices'
                }
            ]
        }
    }
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Start seeding ...`);
        for (const u of recipeData) {
            const recipe = yield prisma.recipe.create({
                data: u,
            });
            console.log(`Created user with id: ${recipe.id}`);
        }
        console.log(`Seeding finished.`);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
