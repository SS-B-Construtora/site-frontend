import {delay, HttpResponse, http} from 'msw'
import fruits from './data/fruits.json' with {type: 'json'}
import { newsHomeMock, getLatestNews, getNewsByCategory, getNewsById } from './newsHome'

export const handlers = [
	http.get('/fruits', async () => {
		await delay('real')
		return HttpResponse.json(fruits)
	}),

	http.get('/news', async ({ request }) => {
		await delay('real')
		const url = new URL(request.url)
		const limit = url.searchParams.get('limit')
		const category = url.searchParams.get('category')
		
		if (category) {
			return HttpResponse.json(getNewsByCategory(category))
		}
		
		if (limit) {
			return HttpResponse.json(getLatestNews(parseInt(limit)))
		}
		
		return HttpResponse.json(newsHomeMock)
	}),

	http.get('/news/:id', async ({ params }) => {
		await delay('real')
		const { id } = params
		const news = getNewsById(id as string)
		
		if (news) {
			return HttpResponse.json(news)
		}
		
		return HttpResponse.json({ error: 'Notícia não encontrada' }, { status: 404 })
	})
]
