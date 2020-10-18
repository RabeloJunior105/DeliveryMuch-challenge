import { Router } from 'express';
import recipiesRoutes from '@modules/recipies/infra/http/routes/recipies.routes';

const routes = Router();

routes.use('/recipies', recipiesRoutes);

export default routes;
