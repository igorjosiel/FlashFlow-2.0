import { FaRegTrashCan } from "react-icons/fa6";
import { deleteFlashcard } from "../../services/flashcards";

interface IDeleteFlashCardModal {
    isOpen: boolean;
    closeDeleteFlashcardModal: () => void;
    flashcardId: number;
    setHandleDataOperation: (operation: "add" | "update" | "delete" | "") => void;
};

const DeleteFlashCardModal= ({
    isOpen,
    closeDeleteFlashcardModal,
    flashcardId,
    setHandleDataOperation
}: IDeleteFlashCardModal) => {
    const handleDeleteFlashcard = async () => {
        await deleteFlashcard(flashcardId);

        closeDeleteFlashcardModal();
        setHandleDataOperation("delete");
    }

    if (isOpen) {
        return (
            <div className=" fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-111 bg-white p-8 rounded-2xl">
                <div className="h-16 w-16 rounded-full bg-wine-red-light m-auto flex justify-center items-center">
                    <FaRegTrashCan size={20} color="#9E3F4E" />
                </div>

                <h2 className="font-manrope font-extrabold text-[24px] leading-8 text-surface-dark mb-3 mt-6 text-center">
                    Tem certeza que deseja excluir este card?
                </h2>
                <p className="font-inter font-normal text-[14px] leading-[22.8px] text-surface-light-400 mb-6 text-center">
                    Esta ação não pode ser desfeita e o card será removido permanentemente da sua biblioteca.
                </p>

                <div className="flex gap-3">
                    <button
                        onClick={closeDeleteFlashcardModal}
                        className="bg-surface-light-500 text-surface-dark py-4 rounded-full w-[50%] font-manrope font-bold text-[14px]
                        leading-5 hover:cursor-pointer hover:bg-surface-dark hover:text-surface-light-500"
                    >
                        Cancelar
                    </button>
                    <button onClick={handleDeleteFlashcard} className="bg-wine-red text-white py-4 rounded-full font-manrope w-[50%] font-bold text-[14px] leading-5
                        hover:cursor-pointer hover:opacity-90">
                        Excluir
                    </button>
                </div>
            </div>
        );
    }

    return;
}

export default DeleteFlashCardModal;
