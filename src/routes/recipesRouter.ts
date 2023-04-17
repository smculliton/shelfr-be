import { Router } from 'express'
import recipesController from '../controllers/recipesController'

export const recipesRouter: Router = Router()

recipesRouter.get('/', recipesController.getRecipes)
