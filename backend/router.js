import { Router } from 'express';
import PostController from './PostController.js';

const router = new Router();

router.post('/books', PostController.create);
router.get('/books', PostController.getAll);
router.get('/books/:date', PostController.getByDate);
router.get('/books/phone/:phone', PostController.getByPhone);
router.put('/books', PostController.update);
router.delete('/books/:id', PostController.delete);

export default router;