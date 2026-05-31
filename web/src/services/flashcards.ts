import { api } from './api';

export async function getFlashcards(selectedCategory: string) {
  if (selectedCategory) {
    const response = await api.get(`/flashcards?category=${selectedCategory}`);

    return response.data;
  }
  
  const response = await api.get(`/flashcards`);

  return response.data;
}
