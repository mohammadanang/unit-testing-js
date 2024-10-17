import { Router } from 'express';
import api_handler from './api_handler.js';

const router = Router();

router.get('/', [
  api_handler.getActivity,
]);
router.get('/:id', [
  api_handler.findActivity,
]);

export default router;
