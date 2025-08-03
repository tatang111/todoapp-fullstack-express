const prisma = require("../utils/prisma")

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            orderBy: {
                id: "asc"
            }
        })

        if (!products) return res.status(404).json({ message: "Products Not Found" })

        res.status(200).json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
const getProductById = async (req, res) => {
    const productId = Number(req.params.id)
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        })

        if (!product) return res.status(404).json({ message: "Product Not Found" })

        res.status(200).json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
const createProduct = async (req, res) => {
    const { name, price } = req.body
    try {
        if (!name || typeof price !== "number") {
            return res.status(400).json({ message: "Invalid input data" })
        }

        const product = await prisma.product.create({
            data: {
                name: name,
                price: price
            }
        })

        res.status(201).json({ message: "Successfully Creating Product", data: product })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const updateProduct = async (req, res) => {
    const id = Number(req.params.id)
    const { name, price } = req.body
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id
            }
        })

        if (!product) return res.status(404).json({ message: "Product Not Found" })

        const productUpdate = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                name: name,
                price: price
            }
        })

        res.status(200).json({ message: "Successfully Updating Product", data: productUpdate })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}
const deleteProduct = async (req, res) => {
    const id = Number(req.params.id)
    try {
        const product = await prisma.product.delete({
            where: {
                id: id
            }
        })

        res.status(200).json({ message: "Successfully Deleting Product", data: product })
    } catch (error) {
        if (error.code = "P2025") {
            return res.status(404).json({ message: "Product Not Found" })
        }
        console.error(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}