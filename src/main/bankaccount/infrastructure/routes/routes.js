const express = require("express")
const router = express.Router()


const bankAccountRouter = require('./bank-account.routes');

const Routes = () => {
    // Registrar rutas
    router.use("/bank-account", bankAccountRouter())

    return router
}

module.exports = Routes