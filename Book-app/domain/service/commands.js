const { json } = require("express");


module.exports = (repository) => {
    async function execute(model){
        return Promise.all([repository.findById(model._id),])
        .then(async (book) => {
                if (book[0] ){
                    if (model.stock <= 0){
                        model.state = false
                    }
                    else {model.state = true}
                    repository.update(model,model)
                    return Promise.reject("Este libro ya esta en venta")
                }
                
                repository.save(model)
                resolve("Se a guardado con exito")
        })
    }

    return {execute}
}