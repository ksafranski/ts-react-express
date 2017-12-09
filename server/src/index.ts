import * as express from 'express'
import * as path from 'path'

const PORT = process.env.PORT || 8888

const app = express()

// HMR
app.use(require('./middleware/hmr')())

// Static server
app.use(express.static(path.resolve(process.cwd(), './client')))

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
