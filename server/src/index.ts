import * as express from 'express'
import * as path from 'path'

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static(path.resolve(__dirname, '../../client')))

app.listen(PORT)
