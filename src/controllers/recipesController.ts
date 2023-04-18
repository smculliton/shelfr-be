import { Request, Response } from 'express'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const getRecipes = async (req: Request, res: Response) => {
  const recipes = await prisma.recipe.findMany()
  res.json(recipes)
}

const getRecipeById = async (req: Request, res: Response) => {
  const { id }: { id?: string} = req.params
  const recipe = await prisma.recipe.findUnique({
      where: { id: Number(id) }
  })
  res.json(recipe)
}

const createRecipe = async (req: Request, res: Response) => {
  const { name, steps, description, ingredients } = req.body

  const ingredientData = ingredients.map((ingredient: Prisma.IngredientCreateInput) => {
    return { 
      name: ingredient.name, 
      amount: ingredient.amount, 
      unit: ingredient.unit 
    }
  })

  const recipe = await prisma.recipe.create({
    data: {
      name: name,
      steps: steps,
      description: description,
      ingredients: {
        create: ingredientData
      }
    }
  })

  res.json(recipe)
}

const deleteRecipe = async (req: Request, res: Response) => {
  const { id }: { id?: string} = req.params

  const recipe = await prisma.recipe.delete({
    where: { id: parseInt(id) }
  })
  console.log(recipe)
  res.json(recipe)
}

export default { 
  getRecipes,
  getRecipeById,
  createRecipe,
  deleteRecipe
}