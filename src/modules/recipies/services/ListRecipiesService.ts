import AppError from '@shared/errors/AppError';
import recipiespuppy from '@shared/infra/http/apis/recipepuppy.api'
import Giphy from '@shared/infra/http/apis/giphy.api'

interface IRequestDTO {
    i: string;
}

interface RecipiesRequest {
    title: string;
    href: string;
    ingredients: string;
    thumbnail: string;
}

export default class ListRecipiesService {

    public async execute({ i }: IRequestDTO): Promise<any> {
        const keywords = i.split(',')
        const response = await recipiespuppy.get(`/`, {
            params: {
                i
            }
        })

        if (keywords.length > 3) {
            throw new AppError('ingredient limit exceeded')
        }

        const result = await Promise.all(
            await response.data.results.map(async (results: RecipiesRequest) => {
                const { title, ingredients: ingredient, href: link } = results

                const ingredients = ingredient.split(', ').sort()
                const returnGif = await Giphy.get('/v1/gifs/search', {
                    params: {
                        q: title,
                        limit: 1
                    }
                })
                const gif = returnGif.data.data[0].images.original.url;

                return { title, ingredients, link, gif }
            })
        )
        return { keywords, recipies: result }
    }
}


