import type { ButtonHTMLAttributes } from "react";

interface IButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: IButton) {
    return (
        <button {...props} className="p-6 bg-linear-to-br from-primary-color to-secondary-color font-manrope font-bold text-[14px] leading-5 
        text-white h-10 w-38 flex justify-center items-center rounded-3xl cursor-pointer">
            {children}
        </button>
    );
}

export default Button;
