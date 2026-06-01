import type { Flashcard } from '../types/flashcard';
import { api } from './api';

export async function getFlashcards(selectedCategory: string) {
  try {
    if (selectedCategory) {
      const response = await api.get(`/flashcards?category=${selectedCategory}`);

      return response.data;
    }
    
    const response = await api.get(`/flashcards`);

    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function deleteFlashcard(flashcardId: number){
  try {
    await api.delete(`/flashcards/${flashcardId}`);

    return;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function createFlashcard(newFlashcard: Flashcard) {
  try {
    await api.post(`flashcards`, newFlashcard);

    return;
  } catch (error) {
    console.log("Error", error);
  }
}
