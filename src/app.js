const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

const productRoute = require('./product/product.route')
app.use("/products", productRoute)

app.listen(process.env.PORT, () => {
    console.log(`Running on port http://localhost:${process.env.PORT}`)
})