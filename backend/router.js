import { Router } from 'express';

import BookController from './controllers/BookController.js';
import UserController from './controllers/UserController.js';

const router = new Router();

router.post('/books', BookController.create);
router.get('/books', BookController.getAll);
router.get('/books/:date', BookController.getByDate);
router.get('/books/phone/:phone', BookController.getByPhone);
router.put('/books', BookController.update);
router.delete('/books/:id', BookController.delete);

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.delete('/users/:id', UserController.delete);

export default router;