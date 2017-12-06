import * as express from 'express'
import * as path from 'path'

const PORT = process.env.PORT || 8888

const app = express()

// HMR
require('./util/webpack_hmr')(app)

// Static server
app.use(express.static(path.resolve(process.cwd(), './client')))

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
