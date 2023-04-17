import { Request, Response } from 'express'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient

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

export default { 
  getRecipes,
  getRecipeById
}