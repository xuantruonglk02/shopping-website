const express = require('express');
const createError = require('http-errors');

const { getUserId } = require('../controllers/user.controller');

const authMiddleware = require('../middlewares/auth.middleware');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/search', (req, res) => {
  res.render('search', {
    title: req.query.keyword,
    keyword: req.query.keyword
  });
});

router.get('/category/:categoryId', (req, res) => {
  res.render('category', {
    title: req.query.name
  });
});

router.get('/:id', productController.getProductById);

router.post('/new', productController.getNewProducts);
router.post('/category/all', productController.getAllCategories);
router.post('/category/class/all', productController.getAllProductClasses);
router.post('/category/line/all', productController.getAllProductLines);
router.post('/category/class/:classId', productController.getAllProductLinesByClass);
router.post('/category/:categoryId', productController.getProductsByCategory);
router.post('/search', productController.searchProductsByKeyword);
router.post('/checkout-info', productController.getProductsForCheckout);
router.post('/:productId/rating', productController.getAllRatingsOfProduct);
router.post('/:productId/rate', authMiddleware.verifyTokenPOST, productController.insertUserRating);

module.exports = router;
