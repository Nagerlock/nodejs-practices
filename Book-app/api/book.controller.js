const BookServices = require("../domain/service/services.js")
const BookCommand = require("../domain/service/commands.js")
const UserDelete = require("../domain/service/delete.commands")

module.exports = (repository) => {

    const findAll = (req, res) =>{
        BookServices(repository)
        .execute()
        .then((result) => res.send(result))
        .catch((err) => {
            console.error(err)
            res.sendStatus(500).json("Error al consultar")
        }); 
    }

    const save = (req, res) => {
        const book = req.body


        BookCommand(repository)
        .execute(book)
        .then((result) => res.send(result))
        .catch((err) => {
            console.error(err)
            res.send("Error, Ya esxiste")
    })
    }
    const eliminar = (req, res) => {
        const book = req.body

        UserDelete(repository)
        .execute(book)
        .then((result)=> res.send(result))
        .catch((err) => {
            console.error(err);
            res.send("Error")
        })
        
    }
    
    return{
        findAll,
        save,
        eliminar
    }

}