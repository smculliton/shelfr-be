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
      where: { id: Number(id) },
      include: { ingredients: {
        select: {
          name: true,
          amount: true,
          unit: true
        }
      }}
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

const updateRecipe = async (req: Request, res: Response) => {
  const { id }: { id?: string} = req.params
  const { name, steps, description } = req.body

  try {  
    const recipe = await prisma.recipe.update({
        where: { id: parseInt(id) },
        data: {
          name: name,
          steps: steps,
          description: description
        }
      })
    res.json(recipe)
  } catch (e) {
    res.json({ error: `Record with id ${id} could not be found`})
    // if (e instanceof Prisma.PrismaClientKnownRequestError) {
    //   if (e.code === 'P2025') {
    //     res.json(`Record with id ${id} could not be found`)
    //   }
    // }
  }
}

const deleteRecipe = async (req: Request, res: Response) => {
  const { id }: { id?: string} = req.params

  const recipe = await prisma.recipe.delete({
    where: { id: parseInt(id) }
  })
  res.json(recipe)
}

export default { 
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
}