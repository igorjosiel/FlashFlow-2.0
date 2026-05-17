function FilterSection() {
    return (
        <section className="mt-10 mb-8 flex justify-between items-center">
            <div className="flex-col gap-2">
                <span className="font-inter text-primary-color font-bold text-xs uppercase leading-[15.6px] tracking-[1.04px]">
                    Painel de aprendizado
                </span>
                <h1 className="font-manrope font-extrabold text-[36px] leading-11.25 text-surface-dark w-xl">
                    Domine tecnologia com foco total.
                </h1>
            </div>

            <ul className="flex bg-surface-light-100 rounded-3xl h-15 p-3">
                <li className="bg-surface-light-200 rounded-3xl px-4 py-2 rounded-1xl font-inter font-semibold text-[14px] leading-5 text-secondary-color">
                    Tudo
                </li>
                <li className="px-4 py-2 rounded-1xl font-inter font-medium text-[14px] leading-5 text-surface-dark cursor-pointer">Javascript</li>
                <li className="px-4 py-2 rounded-1xl font-inter font-medium text-[14px] leading-5 text-surface-dark cursor-pointer">React</li>
                <li className="px-4 py-2 rounded-1xl font-inter font-medium text-[14px] leading-5 text-surface-dark cursor-pointer">Tailwind CSS</li>
                <li className="px-4 py-2 rounded-1xl font-inter font-medium text-[14px] leading-5 text-surface-dark cursor-pointer">Node.js</li>
            </ul>
        </section>
    );
}

export default FilterSection;
