const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const protect = require('../middlewares/authMiddleware');
const { body, validationResult } = require('express-validator');


// Validation middleware for POST and PUT requests
const validateBook = [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').notEmpty().withMessage('Price is required').isNumeric().withMessage('Price must be a number'),
    body('coverImage').notEmpty().withMessage('Cover image URL is required').isURL().withMessage('Invalid URL format'),
];

router.route('/')
    .get(bookController.getBooks)
    .post(protect, validateBook, validateRequest, bookController.createBook);

router.route('/:id')
    .get(bookController.getBookById)
    .put(protect, validateBook, validateRequest, bookController.updateBook)
    .delete(protect, bookController.deleteBook);




// Custom middleware to handle validation errors
function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}    

module.exports = router;
