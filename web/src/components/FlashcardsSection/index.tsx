import { useState ,useEffect } from "react";
import FlashcardsContent from "../FlashcardsContent";
import FlashcardsEmptyState from "../FlashcardsEmptyState";
import { getFlashcards } from '../../services/flashcards';
import type { Flashcard } from "../../types/flashcard";

export interface IFlashcardsSection {
    selectedCategory: string;
    handleDataOperation: string;
    setHandleDataOperation: (operation: "add" | "update" | "delete" | "") => void;
}

function FlashcardsSection({
    selectedCategory,
    handleDataOperation,
    setHandleDataOperation
}: IFlashcardsSection) {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    useEffect(() => {
        async function fetchFlashcards() {
            try {
                const response = await getFlashcards(selectedCategory);

                setFlashcards(response.data.flashcards);
            } catch (err) {
                console.log('Erro ao buscar os flashcards');
            }
        }

        fetchFlashcards();
    }, [selectedCategory, handleDataOperation]);

    return (
        <section className="mt-24">
            {flashcards.length > 0 ? 
                <FlashcardsContent flashcards={flashcards} setHandleDataOperation={setHandleDataOperation} /> :
                <FlashcardsEmptyState />
            }
        </section>
    );
}

export default FlashcardsSection;
