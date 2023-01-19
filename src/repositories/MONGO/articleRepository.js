const MongoClient = require("../../database/MongoClient")
const { ObjectId } = require('mongodb')

const getCollection = () => MongoClient.getDb().collection('articles')

function getArticles () {
    return getCollection().find({}).toArray()
}

async function getArticle (articleId) {
  return getCollection().findOne({ _id: new ObjectId(articleId) })
}

async function createArticle (article) {
  const { id, ...articleData} = article
  return getCollection().insertOne({ _id: new ObjectId(id), ...articleData })
}

function updateArticle (articleId, article) {
  return getCollection().updateOne({ _id: new ObjectId(articleId)}, { $set: { ...article } })
}


function deleteArticle (articleId) {
  return getCollection().deleteOne({ _id: new ObjectId(articleId) })
}

async function getArticlesByFilter (filters = {}, limit, offset) {
  return getCollection().find(filters).limit(limit).skip(offset).toArray()
}

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticlesByFilter
}
