import blackAndWhiteIcon from "../../assets/flashcard-black-and-white-icon.svg";
import Button from "../Button";

function FlashcardsEmptyState() {
  return (
    <div className="flex flex-col gap-4 items-center">
        <img src={blackAndWhiteIcon} alt="Ícone do Flash Flow em preto e branco." />
        
        <p className="font-inter font-normal text-[14px] leading-5 text-surface-light-300 text-center">
            Você ainda não possui flashcards.<br></br> Que tal criar um para começar?
        </p>
        
        <Button>Novo Flashcard</Button>
    </div>
  );
}

export default FlashcardsEmptyState;
