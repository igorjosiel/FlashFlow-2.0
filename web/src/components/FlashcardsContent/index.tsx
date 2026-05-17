import { BiRefresh, BiPencil } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function FlashcardsContent() {
    return (
        <ul className="grid grid-cols-4 gap-8">
            <li className="bg-white max-h-80 flex flex-col items-start rounded-2xl p-8 shadow-[0px_10px_30px_0px_rgba(42,52,57,0.12)]">
                <span className="px-3 py-1 rounded-2xl bg-surface-light-100 font-inter font-semibold text-[12px] leading-[16.8px] 
                    text-surface-light-400 inline-flex items-center uppercase">
                    JavaScript
                </span>

                <div className="h-56.75 mt-1 flex items-center">
                    <h2 className="font-manrope font-bold text-[20px] leading-7 text-surface-dark">
                        O que é uma Closure em JavaScript?
                    </h2>
                </div>

                <div className="bg-surface-light-500 p-4 h-11 w-11 rounded-full relative ml-auto cursor-pointer">
                    <BiRefresh size={20} color="#2A3439" className="absolute top-3 left-3" />
                </div>
            </li>

            <li className="bg-white max-h-80 flex flex-col rounded-2xl p-8 shadow-[0px_10px_30px_0px_rgba(42,52,57,0.12)]">
                <div className="flex justify-between">
                    <span className="px-3 py-1 rounded-2xl bg-surface-light-100 font-inter font-semibold text-[12px] leading-[16.8px] 
                        text-surface-light-400 inline-flex items-center uppercase">
                        React
                    </span>

                    <div className="flex gap-1">
                        <div className="p-2">
                            <BiPencil size={18} className="cursor-pointer" />
                        </div>
                        <div className="p-2">
                            <FaRegTrashCan size={16} color="#9E3F4E" className="cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div className="h-56.75 mt-1 flex flex-col justify-center items-center">
                    <h2 className="font-inter font-normal text-[14px] leading-5 text-surface-light-400 text-center mb-2">
                        O que é Virtual DOM?
                    </h2>
                    <p className="font-manrope font-semibold text-base leading-5 text-primary-color">
                        Virtual DOM é uma representação em memória do DOM real. Ele permite que bibliotecas como o React comparem mudanças de forma 
                        eficiente e atualizem apenas os elementos necessários na interface, melhorando a performance.
                    </p>
                </div>

                <div className="bg-surface-light-500 p-4 h-11 w-11 rounded-full relative ml-auto cursor-pointer">
                    <BiRefresh size={20} color="#2A3439" className="absolute top-3 left-3" />
                </div>
            </li>

            <li className="bg-surface-light-100 max-h-80 flex flex-col rounded-2xl px-8 py-21 text-center shadow-[0px_10px_30px_0px_rgba(42,52,57,0.12)]
                border-2 border-surface-light-700 border-dashed">
                <div className="bg-surface-light-700 h-16 w-16 rounded-full flex justify-center items-center mb-4 ml-auto mr-auto cursor-pointer">
                    <FaPlus size={30} color="#566166" />
                </div>

                <h3 className="font-manrope font-bold text-[18px] leading-7 text-surface-light-400">Criar novo card</h3>
                <p className="font-inter font-normal text-[12px] leading-4 text-surface-light-400">
                    Adicione um novo desafio à sua biblioteca e mantenha o ritmo.
                </p>
            </li>
        </ul>
    );
}

export default FlashcardsContent;
