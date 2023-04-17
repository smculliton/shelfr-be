import { Request, Response } from 'express'

const getRecipes = (req: Request, res: Response) => {
  res.send('Hello, this is would be a recipe')
}

export default { getRecipes }