const { json } = require("express");
module.exports = (repository) => 
{
    async function execute(model){
        model.state = false
        aux = model;
        repository.update(model, aux)
        return Promise.reject("Este libro a sido removido")  
    }
    return {execute}
}