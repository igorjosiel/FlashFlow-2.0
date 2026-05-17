function FilterSection() {
    return (
        <section>
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
