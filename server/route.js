import { Router } from 'express';
import activityHandler from '../activity/handler/route_handler.js';

const apiRouter = Router();

apiRouter.use('/activity', activityHandler);

export default apiRouter;
