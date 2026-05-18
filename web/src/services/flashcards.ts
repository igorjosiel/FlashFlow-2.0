import { api } from './api';

export async function getFlashcards() {
  const response = await api.get('/flashcards')

  return response.data;
}
