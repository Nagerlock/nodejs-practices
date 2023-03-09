const express = require ("express")

const userRoutes = require ('./users.routes.js')

const Routes = () =>{

    const router = express.Router();
    router.use("/libros", userRoutes())



    return router
}

module.exports = Routes;