const ErrorResponse = require('../utils/errorResponse');
const asyncWrap = require('express-async-wrap');
const { getArtcileRepository } = require('../repositories');

const { getArticle, getArticles, createArticle, deleteArticle, updateArticle } = getArtcileRepository()

exports.getArticles = asyncWrap(async (req, res, next) => {
    const articles = await getArticles(req.params.offset, req.params.limit);

    res.status(200).json({
        success: true,
        data: articles
    });
});


exports.getArticle = asyncWrap(async (req, res, next) => {
    const article = await getArticle(req.params.id);
    if (!article) {
        return next(
            new ErrorResponse(`No article with the id of ${req.params.id}`),
            404
        );
    }

    res.status(200).json({
        success: true,
        data: article
    });
});


exports.addArticle = asyncWrap(async (req, res, next) => {

    const article = await createArticle(req.body);

    res.status(200).json({
        success: true,
        data: article
    });
});


exports.updateArticle = asyncWrap(async (req, res, next) => {
    let article = await getArticle(req.params.id);

    if (!article) {
        return next(
            new ErrorResponse(`No article with the id of ${req.params.id}`),
            404
        );
    }

    article = await updateArticle(req.params.id, req.body);

    res.status(200).json({
        success: true,
        data: article
    });
});


exports.deleteArticle = asyncWrap(async (req, res, next) => {
    const article = await getArticle(req.params.id);

    if (!article) {
        return next(
            new ErrorResponse(`No article with the id of ${req.params.id}`),
            404
        );
    }

    await deleteArticle(req.params.id)

    res.status(200).json({
        success: true,
        data: {}
    });
});