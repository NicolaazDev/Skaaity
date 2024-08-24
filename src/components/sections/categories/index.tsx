import { categories } from "@/data/categories";

import "./categories.css";

export default function Categories() {
  return (
    <section className="w-full py-[10vh] bg-background relative mx-auto px-4 ">
      <h2 className="text-7xl text-gradient font-[400] leading-[1.2] text-center w-full font-poppinsBold">
        Produtos
      </h2>
      <p className="font-poppinsLight leading-[2.5] text-center w-full">
        Descubra todas os nosso produtos, veja as ofertas e promocões.
      </p>
      <div className="grid grid-cols-[repeat(3,minmax(250px,1fr))] w-[85%] mx-auto mt-4 grid-rows-[repeat(2,minmax(350px,1fr))] gap-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`h-full grid-item center-col !flex-col-reverse bg-gray-100 rounded-[8px] relative ${
              index === 0
                ? "category-first !justify-start !items-start"
                : "col-span-1 row-span-1"
            } border-transparent border border-solid transition-all cursor-pointer`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-[100px] object-cover rounded-lg absolute right-[0.8rem] scale-[3.8] z-[0]"
            />
            <div className="content w-full px-3 py-2 pt-8 z-20">
              <h3 className="text-5xl font-bold mt-2 z-10">{category.name}</h3>
              <p className="text-sm max-w-[50%]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
