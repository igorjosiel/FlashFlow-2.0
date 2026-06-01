import { useState } from "react";
import colorfulIcon from "../../assets/flashcard-colorful-icon.svg";
import Button from "../Button";
import AddEditFlashcardModal from "../AddEditFlashcardModal";

interface IHeader {
  setHandleDataOperation: (operation: "add" | "update" | "delete" | "") => void;
}

function Header({ setHandleDataOperation }: IHeader) {
  const [isOpenAddEditFlashcardModal, setIsOpenAddEditFlashcardModal] = useState<boolean>(false);

  return (
    <header className="flex justify-between">
      <div className="flex justify-between w-41.75 items-center gap-3">
        <img src={colorfulIcon} alt="Logo da aplicação Flash Flow" />
        
        <span className="font-manrope font-extrabold text-[24px] leading-8 tracking-[-0.6px] text-surface-dark">
          Flash Flow
        </span>
      </div>
      
      <Button onClick={() => setIsOpenAddEditFlashcardModal(true)}>
        Novo Flashcard
      </Button>

      <AddEditFlashcardModal
        isOpen={isOpenAddEditFlashcardModal}
        closeAddEditFlashcardModal={() => setIsOpenAddEditFlashcardModal(false)}
        operation="add"
        setHandleDataOperation={setHandleDataOperation}
      />
    </header>
  );
}

export default Header;
