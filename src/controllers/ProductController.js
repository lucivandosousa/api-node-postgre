const conn = require("../database")

class ProductController {

  static async cadastrarProduto(req, res) {
    const { description, price, quantity } = req.body

    try {
      if (description === undefined) {
        res.status(404).send("A descrição não foi informada.")
        return
      }

      await conn.query('INSERT INTO products (description, price, quantity) VALUES ($1, $2, $3) RETURNING *', [description, price, quantity])

      res.status(201).send("Produto cadastrado")

    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async buscarProdutos(req, res) {
    const result = await conn.query("SELECT * FROM products")
    const produtos = result.rows

    res.status(200).json(produtos)
  }

  static async buscarProdutoPorId(req, res) {
    const { id } = req.params
    const result = await conn.query("SELECT * FROM products WHERE id = $1", [id])

    try {
      if (result.rowCount === 0) {
        res.status(404).send("ID não foi localizado.")
        return
      }

      const produto = result.rows

      res.status(200).json(produto)

    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async atualizarProduto(req, res) {
    const { id } = req.params
    const { description, price, quantity } = req.body
    const result = await conn.query("UPDATE products SET description = $1, price = $2, quantity = $3 WHERE id = $4", [description, price, quantity, id])

    try {
      if (result.rowCount === 0) {
        res.status(404).send("ID não foi localizado.")
        return
      }

      res.status(200).send("Produto atualizado")

    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async deletarProduto(req, res) {
    const { id } = req.params
    const result = await conn.query("DELETE FROM products WHERE id = $1", [id])

    try {
      if (result.rowCount === 0) {
        res.status(404).send("ID não foi localizado.")
        return
      }

      res.status(200).json("Produto excluído")

    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = ProductController