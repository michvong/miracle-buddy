const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/index');
const database = require('./database/database')

database.initializeDatabase()

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
