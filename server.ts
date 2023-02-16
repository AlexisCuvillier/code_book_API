import cors from 'cors'
import express from 'express'
import loginRouter from './routes/loginRouter'
import bookRouter from "./routes/bookRouter"

import "dotenv/config";
import './database/connect'
import createData from './database/connect';
import selfServiceRouter from './routes/selfServiceRouter';


const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const app = express()

app.use(cors())
app.use(express.json())
// createData()


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Books API',
            description: 'API for books management app',
            contact: {
                name: 'Jules verges'
            },
            servers: [{
                url:`http://localhost:5000`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./routes/*.ts`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/api/book", bookRouter)
app.use('/api/login', loginRouter)
app.use('/api/selfservice', selfServiceRouter)
