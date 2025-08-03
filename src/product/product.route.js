const { Router } = require('express')
const router = Router()
const productController = require('./product.controller')

router.get("/", productController.getAllProducts)
router.get("/:id", productController.getProductById)
router.post("/", productController.createProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)

module.exports = router