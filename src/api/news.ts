import type { NewsItem } from '../mocks/newsHome';

export const fetchNews = async (limit?: number): Promise<NewsItem[]> => {
  const url = limit ? `/news?limit=${limit}` : '/news';
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Falha ao carregar notícias');
  }
  
  return response.json();
};

export const fetchNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  const response = await fetch(`/news?category=${category}`);
  
  if (!response.ok) {
    throw new Error('Falha ao carregar notícias por categoria');
  }
  
  return response.json();
};

export const fetchNewsById = async (id: string): Promise<NewsItem> => {
  const response = await fetch(`/news/${id}`);
  
  if (!response.ok) {
    throw new Error('Notícia não encontrada');
  }
  
  return response.json();
};