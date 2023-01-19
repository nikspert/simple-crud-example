const { knex } = require("../../database/KnexSqlClient");

const Article = knex('articles')

const getArticle = (id) => {
  return Article.where('id', id).first();
}

const getArticles = (offset, limit = 20) => {
    return Article
    .limit(limit)
    .offset(offset)
}

const createArticle = (article) => {
    return Article.insert(article, '*')
}

const updateArticle = (id, data) => {
    return Article.update(data, '*').where({ id })
}

const deleteArticle = (id) => {
    return Article.where({ id }).del()
}


module.exports = {
    getArticle,
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle,
}