import { Router } from 'express'
import recipesController from '../controllers/recipesController'

export const recipesRouter: Router = Router()

recipesRouter.get('/', recipesController.getRecipes)
recipesRouter.get('/:id', recipesController.getRecipeById)
recipesRouter.post('/', recipesController.createRecipe)

recipesRouter.delete('/:id', recipesController.deleteRecipe)
