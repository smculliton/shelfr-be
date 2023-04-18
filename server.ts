import express, {Express, Request, Response} from 'express'
import { recipesRouter } from './src/routes/recipesRouter'

const app: Express = express()
const port = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response)=>{
    res.send('Hello, Welcome to the Shelfr API')
})

app.use('/api/v1/recipes', recipesRouter)

app.listen(port, ()=> {
console.log(`[Server]: I am running at https://localhost:${port}`)
})