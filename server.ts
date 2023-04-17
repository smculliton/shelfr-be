import express, {Express, Request, Response} from 'express'
import { recipesRouter } from './src/routes/recipesRouter'

const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, this is Express + TypeScript')
})

app.use('/api/v1/recipes', recipesRouter)

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`)
})