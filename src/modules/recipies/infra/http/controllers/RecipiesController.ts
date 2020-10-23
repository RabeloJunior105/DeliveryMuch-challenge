import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListRecipiesService from '@modules/recipies/services/ListRecipiesService';
export default class RecipiesController {

  public async findByQuery(req: Request, res: Response): Promise<Response> {

    const { i } = req.query;

    const listRecipies = container.resolve(ListRecipiesService);

    const recipes = await listRecipies.execute({ i });

    return res.json(recipes);

  }

}
