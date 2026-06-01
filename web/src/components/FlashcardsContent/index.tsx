import { useState, type ReactNode } from "react";
import { BiRefresh, BiPencil } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import type { Flashcard } from "../../types/flashcard";
import DeleteFlashCardModal from "../DeleteFlashcardModal";
import AddEditFlashcardModal from "../AddEditFlashcardModal";

interface IFlashcardsContent {
    flashcards: Flashcard[] | [];
    setHandleDataOperation: (operation: "add" | "update" | "delete" | "") => void;
}

function FlashcardsContent({ flashcards, setHandleDataOperation }: IFlashcardsContent) {
    const [flippedId, setFlippedId] = useState<number | null>(null);
    const [isOpenAddFlashcardModal, setIsOpenAddFlashcardModal] = useState<boolean>(false);
    const [isOpenEditFlashcardModal, setIsOpenEditFlashcardModal] = useState<boolean>(false);
    const [isOpenDeleteFlashcardModal, setIsOpenDeleteFlashcardModal] = useState<boolean>(false);

    const handleFlipCard = (id: number) => {
        setFlippedId((currentId) => (
            currentId === id ? null : id
        ));
    }

    const cardHeader = (flashcard: Flashcard): ReactNode => {
        const { id, category } = flashcard;
        const isFlipped = flippedId === Number(id);

        if (!isFlipped) {
            return (
                <div className="flex">
                    <span className="px-3 py-1 rounded-2xl bg-surface-light-100 font-inter font-semibold text-[12px] leading-[16.8px] 
                        text-surface-light-400 inline-flex items-center uppercase">
                        {category}
                    </span>
                </div>
            );
        } else {
            return (
                <div className="flex justify-between">
                    <span className="px-3 py-1 rounded-2xl bg-surface-light-100 font-inter font-semibold text-[12px] leading-[16.8px] 
                        text-surface-light-400 inline-flex items-center uppercase">
                        {category}
                    </span>

                    <div className="flex gap-1">
                        <div className="p-2">
                            <BiPencil
                                size={18}
                                className="cursor-pointer"
                                onClick={() => setIsOpenEditFlashcardModal(true)}
                            />

                            <AddEditFlashcardModal
                                isOpen={isOpenEditFlashcardModal}
                                closeAddEditFlashcardModal={() => setIsOpenEditFlashcardModal(false)}
                                operation="edit"
                                setHandleDataOperation={setHandleDataOperation}
                                flashcard={flashcard}
                            />
                        </div>

                        <div className="p-2">
                            <FaRegTrashCan
                                size={16}
                                color="#9E3F4E"
                                className="cursor-pointer"
                                onClick={() => setIsOpenDeleteFlashcardModal(true)}
                            />

                            <DeleteFlashCardModal
                                isOpen={isOpenDeleteFlashcardModal}
                                closeDeleteFlashcardModal={() => setIsOpenDeleteFlashcardModal(false)}
                                flashcardId={Number(id)}
                                setHandleDataOperation={setHandleDataOperation}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }

    const cardContent = (id: number, question: string, answer: string): ReactNode => {
        const isFlipped = flippedId === id;

        if (!isFlipped) {
            return (
                <div className="h-56.75 mt-1 flex items-center">
                    <h2 className="font-manrope font-bold text-[20px] leading-7 text-surface-dark">
                        {question}
                    </h2>
                </div>
            );
        } else {
            return (
                <div className="h-56.75 mt-1 flex flex-col justify-center items-center">
                    <h2 className="font-inter font-normal text-[14px] leading-5 text-surface-light-400 text-center mb-2">
                        {question}
                    </h2>
                    <p className="font-manrope font-semibold text-base leading-5 text-primary-color">
                        {answer}
                    </p>
                </div>
            );
        }
    }

    const renderCardCreateNewCard = () => {
        return (
            <li key={flashcards.length + 1} className="bg-surface-light-100 max-h-80 flex flex-col rounded-2xl px-8 py-21 text-center 
            shadow-[0px_10px_30px_0px_rgba(42,52,57,0.12)] border-2 border-surface-light-700 border-dashed">
                <div className="bg-surface-light-700 h-16 w-16 rounded-full flex justify-center items-center mb-4 ml-auto mr-auto cursor-pointer">
                    <FaPlus
                        size={30}
                        color="#566166"
                        onClick={() => setIsOpenAddFlashcardModal(true)}
                    />
                </div>

                <h3 className="font-manrope font-bold text-[18px] leading-7 text-surface-light-400">Criar novo card</h3>
                <p className="font-inter font-normal text-[12px] leading-4 text-surface-light-400">
                    Adicione um novo desafio à sua biblioteca e mantenha o ritmo.
                </p>

                <AddEditFlashcardModal
                    isOpen={isOpenAddFlashcardModal}
                    closeAddEditFlashcardModal={() => setIsOpenAddFlashcardModal(false)}
                    operation="add"
                    setHandleDataOperation={setHandleDataOperation}
                />
            </li>
        );
    }

    return (
        <ul className="grid grid-cols-4 gap-8">
            {flashcards.map(flashcard => {
                return (
                    <li key={flashcard.id} className="bg-white max-h-80 flex flex-col rounded-2xl p-8 shadow-[0px_10px_30px_0px_rgba(42,52,57,0.12)]">
                        {cardHeader(flashcard)}
                        {cardContent(Number(flashcard.id), flashcard.question, flashcard.answer)}

                        <button className="bg-surface-light-500 p-4 h-11 w-11 rounded-full relative ml-auto cursor-pointer"
                            onClick={() => handleFlipCard(Number(flashcard.id))}>
                            <BiRefresh size={20} color="#2A3439" className="absolute top-3 left-3" />
                        </button>
                    </li>
                );
            })}

            {renderCardCreateNewCard()}
        </ul>
    );
}

export default FlashcardsContent;
