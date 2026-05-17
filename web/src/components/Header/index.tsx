import colorfulIcon from "../../assets/flashcard-colorful-icon.svg";
import Button from "../Button";

function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex justify-between w-41.75 items-center gap-3">
        <img src={colorfulIcon} alt="Logo da aplicação Flash Flow" />
        <span className="font-manrope font-extrabold text-[24px] leading-8 tracking-[-0.6px] text-surface-dark">
          Flash Flow
        </span>
      </div>
      
      <Button>Novo Flashcard</Button>
    </header>
  );
}

export default Header;
