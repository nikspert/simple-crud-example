const { PROVIDER_MONGO } = require("../constants")
const mongoArticleRepository = require("./MONGO/articleRepository")
const postgresArticleRepository = require("./SQL/articleRepository")

const getArtcileRepository = () => {
    if(process.env.DATABASE_PROVIDER===PROVIDER_MONGO){
        return mongoArticleRepository
    }
    return postgresArticleRepository
}


module.exports = {
    getArtcileRepository
}