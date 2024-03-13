const { Router } =  require("express")
const conn = require("../database")
const ProductController = require("../controllers/ProductController")

const route = Router()

route.get("/", (req, res) => {
  res.render("home")
})

route.post("/products", ProductController.cadastrarProduto)

route.get("/products", ProductController.buscarProdutos)

route.get("/products/:id", ProductController.buscarProdutoPorId)

route.put("/products/:id", ProductController.atualizarProduto)

route.delete("/products/:id", ProductController.deletarProduto)

module.exports = route