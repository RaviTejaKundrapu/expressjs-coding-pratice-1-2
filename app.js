const express = require('express')

const app = express()
module.exports = app

app.get('/gadgets', (request, response) => {
  response.sendFile('./gadgets.html', {root: __dirname})
})

app.listen(3000)
