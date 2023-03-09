module.exports = class BookRepository{

    constructor(model){
        this.model = model
    } 

    save(book){
        return new Promise ((resolve, reject) => {
            this.model(book).save()
            resolve("Libro guardado")
            reject(console.log("Error Ya esxiste"))
        });
    }

    findAll(){
        return new Promise((resolve, reject) => {
           let books = this.model.find({state: "true"})
           resolve(books)
        })
    }

    delete(book){
        return new Promise((resolve) => {
            this.model.updateOne(book, {state: false}, (error)=>{
                if(error){console.error("actualizado", error)}})

            resolve("removido")
        })
    }

    findById(_id){
        return new Promise((resolve, reject) => {
            this.model.find({_id: _id})
                .then((books) => resolve(books[0]))
        })

    }

    update(modelo,aux) {
        return new Promise((resolve, reject) => {
            console.log("eliminado")
            this.model(modelo).deleteOne()
            this.model(aux).save()
    })
    }

    findByAuthor(author){
        return new Promise((resolve, reject) => {
            this.model.find({author: author})
                .then((books) => resolve(books[1]))
        })
    }
}