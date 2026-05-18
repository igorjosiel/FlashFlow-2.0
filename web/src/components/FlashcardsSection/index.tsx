import { useState ,useEffect } from "react";
import FlashcardsContent from "../FlashcardsContent";
import FlashcardsEmptyState from "../FlashcardsEmptyState";
import { getFlashcards } from '../../services/flashcards';
import type { Flashcard } from "../../types/flashcard";

function FlashcardsSection() {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchFlashcards() {
            try {
                const response = await getFlashcards();

                setFlashcards(response.data.flashcards);
            } catch (err) {
                setError('Erro ao buscar os flashcards');
            } finally {
                setIsLoading(false);
            }
        }

        fetchFlashcards();
    }, []);

    return (
        <section className="mt-24">
            {flashcards.length > 0 ? <FlashcardsContent flashcards={flashcards} /> : <FlashcardsEmptyState />}
        </section>
    );
}

export default FlashcardsSection;
