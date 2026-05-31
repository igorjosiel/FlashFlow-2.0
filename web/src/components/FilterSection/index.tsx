import { useEffect, useState } from "react";
import clsx from "clsx";
import { getCategories } from '../../services/categories';

interface IFilterSection {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

function FilterSection({ selectedCategory, setSelectedCategory }: IFilterSection) {
    const [categories, setCategories] = useState<string[] | []>([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await getCategories();

                setCategories(response.data.categories);
            } catch (error) {
                console.log('Erro ao buscar as categorias.');
            }
        }

        fetchCategories();
    }, []);

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
                <li
                    onClick={() => setSelectedCategory("")}
                    className={clsx("px-4 py-2 rounded-1xl font-inter text-[14px] leading-5",
                        {
                            "bg-surface-light-200 rounded-3xl font-semibold text-secondary-color": !selectedCategory,
                            "font-medium text-surface-dark cursor-pointer": selectedCategory
                        }
                    )}>
                    Tudo
                </li>

                {categories.map((category, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={clsx("px-4 py-2 rounded-1xl font-inter text-[14px] leading-5",
                                {
                                    "bg-surface-light-200 rounded-3xl font-semibold text-secondary-color": selectedCategory === category,
                                    "font-medium text-surface-dark cursor-pointer": selectedCategory !== category
                                }
                            )}>
                            {category}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default FilterSection;
