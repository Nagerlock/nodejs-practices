module.exports = (repository) => {
    async function execute(){
        const books = repository.findAll();
        return new Promise ((resolve, reject) => {resolve(books)})
    }
    return {execute}
}