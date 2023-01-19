
const express = require('express');
const {
  getArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/articles');


const router = express.Router({ mergeParams: true });


router
  .route('/')
  .get(getArticles)
  .post(addArticle);

router
  .route('/:id')
  .get(getArticle)
  .put(updateArticle)
  .delete(deleteArticle);

module.exports = router;