const express = require("express")
const { engine } = require("express-handlebars")
const route =  require("./routes")

const PORT = process.env.PORT || 3000
const app  = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

app.use(express.json())
app.use(route)
app.use(express.static("public"))

app.listen(PORT, console.log(`Server listening on port ${PORT}`))

