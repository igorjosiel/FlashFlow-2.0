import flashcardIcon from "../../assets/flashcards-icon.svg";

function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex justify-between w-41.75 items-center gap-3">
        <img src={flashcardIcon} alt="Logo da aplicação Flash Flow" />
        <span className="font-manrope font-extrabold text-[24px] leading-8 tracking-[-0.6px] text-surface-dark">
          Flash Flow
        </span>
      </div>
      
      <button className="p-6 bg-linear-to-br from-primary-color to-secondary-color font-manrope font-bold text-[14px] leading-5 text-white h-10 w-38 
        flex justify-center items-center rounded-3xl cursor-pointer">
        Novo Flashcard
      </button>
    </header>
  );
}

export default Header;
