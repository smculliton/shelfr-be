import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient

const recipeData: Prisma.RecipeCreateInput[] = [
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
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of recipeData) {
    const recipe = await prisma.recipe.create({
      data: u,
    })
    console.log(`Created user with id: ${recipe.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })