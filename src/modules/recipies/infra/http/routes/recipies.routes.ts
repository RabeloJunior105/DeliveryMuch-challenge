import { Router } from 'express';
import RecipiesController from '../controllers/RecipiesController'

const usersRouter = Router();

const recipiesController = new RecipiesController()

usersRouter.get('/', recipiesController.findByQuery);


export default usersRouter;
