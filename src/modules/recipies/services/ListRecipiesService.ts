import AppError from '@shared/errors/AppError';
import recipiespuppy from '@shared/infra/http/apis/recipepuppy.api'

interface IRequestDTO {
    i: string;
}


interface RecipiesRequest {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string;
}

/* 
    SAIDA 
  title: string;
  ingredients: [];
  link: string;
  gif: string
*/
export default class ListRecipiesService {

    public async execute({ i }: IRequestDTO): Promise<any> {
        const keywords = i.split(',')

        const response = await recipiespuppy.get(`/`, {
            params: {
                i,
            }
        })

        if (keywords.length > 3) {
            throw new AppError('ingredient limit exceeded')
        }

        const result = await Promise.all(
            await response.data.results.map(async (results: RecipiesRequest) => {
                const { title, ingredients: ingredient, href, thumbnail } = results
                
                const ingredients = ingredient.split(', ').sort()
                
                return { title, ingredients, links: href, thumbnail }
            })
        )
        return { keywords, recipies: result }
    }
}


