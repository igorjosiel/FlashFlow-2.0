import { useEffect, useState } from "react";
import Select, { type SelectOption } from "../Select";
import Label from "../Label";
import { getCategories } from "../../services/categories";
import Textarea from "../Textarea";
import { createFlashcard, updateFlashcard } from "../../services/flashcards";
import type { Flashcard } from "../../types/flashcard";

interface IAddEditFlashcardModal {
    isOpen: boolean;
    closeAddEditFlashcardModal: () => void;
    operation: "add" | "edit";
    setHandleDataOperation: (operation: "add" | "update" | "delete" | "") => void;
    flashcard?: Flashcard;
};

const AddEditFlashcardModal = ({
    isOpen,
    closeAddEditFlashcardModal,
    operation,
    setHandleDataOperation,
    flashcard
}:IAddEditFlashcardModal) => {
    const [categories, setCategories] = useState<SelectOption[] | []>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await getCategories();

                const categories = response.data.categories.map(
                    (category: string) => ({
                        value: category,
                        label: category,
                    })
                );

                setCategories(categories);
            } catch (error) {
                console.log('Erro ao buscar as categorias.');
            }
        }

        if (flashcard) {
            setSelectedCategory(flashcard.category);
            setQuestion(flashcard.question);
            setAnswer(flashcard.answer);
        }

        fetchCategories();
    }, []);

    const clearAddEditFlashcardModal = () => {
        setQuestion("");
        setAnswer("");
        setSelectedCategory("");
        closeAddEditFlashcardModal();
    }

    const handleAddEditFlashcard = async () => {
        if (question && answer && selectedCategory) {
            if (operation === "add") {
                try {
                    await createFlashcard({
                        question,
                        answer,
                        category: selectedCategory
                    });

                    clearAddEditFlashcardModal();
                    
                    setHandleDataOperation("add");
                } catch (error) {
                    console.log('Erro ao buscar as categorias.');
                }
            }

            if (operation === "edit") {
                try {
                    await updateFlashcard({
                        id: flashcard?.id,
                        question,
                        answer,
                        category: selectedCategory
                    });

                    clearAddEditFlashcardModal();
                    
                    setHandleDataOperation("update");
                } catch (error) {
                    console.log('Erro ao buscar as categorias.');
                }
            }
        }
    }

    if (isOpen) {
        return (
            <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-130 bg-white p-8 rounded-2xl z-50">
                <h2 className="font-manrope font-extrabold text-[24px] leading-8 text-surface-dark text-left">
                    Criar Flashcard
                </h2>
                <p className="font-inter font-normal text-[16px] leading-6 text-surface-light-400 text-left">
                    Organize seu conhecimento com precisão e clareza.
                </p>

                <form className="flex flex-col gap-3 mt-6 mb-6.25">
                    <Select
                        name="category"
                        label="Categoria"
                        placeholder="Selecione a categoria do card"
                        options={categories}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    />

                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="questionFlashcard"
                            className="font-inter font-bold text-[10.4px] leading-[15.6px] tracking-[1.4px] text-surface-light-400 uppercase text-left"
                        >
                            Pergunta
                        </Label>
                        <Textarea
                            id="questionFlashcard"
                            placeholder="Ex: O que é uma Closure no Javascript?"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="answerFlashcard"
                            className="font-inter font-bold text-[10.4px] leading-[15.6px] tracking-[1.4px] text-surface-light-400 uppercase text-left"
                        >
                            Resposta
                        </Label>
                        <Textarea
                            id="answerFlashcard"
                            placeholder="Ex: Uma closure é a combinação de uma função com o ambiente léxico..."
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </div>
                </form>

                <div className="flex gap-3">
                    <button
                        onClick={closeAddEditFlashcardModal}
                        className="bg-surface-light-500 text-surface-dark py-4 rounded-full w-[50%] font-inter font-bold text-[14px]
                        leading-5 hover:cursor-pointer hover:bg-surface-dark hover:text-surface-light-500"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleAddEditFlashcard}
                        className="bg-blue-dark text-white py-4 rounded-full font-inter w-[50%] font-bold text-[14px] leading-5
                        hover:cursor-pointer hover:opacity-90"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        );
    }
}

export default AddEditFlashcardModal;
