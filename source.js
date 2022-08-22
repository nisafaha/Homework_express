const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hey! I am Nisaf')
})

app.listen(port, () => {
  console.log(`listens on port ${port} for connnections`)
})