import { categories } from "@/data/categories";

import "./categories.css";

export default function Categories() {
  return (
    <section className="w-full h-[100vh] bg-background relative mx-auto px-4 py-8">
      <h2 className="text-7xl text-gradient font-[400] leading-[1.2] text-start font-poppinsBold">
        Produtos
      </h2>
      <p className="font-poppinsLight leading-[2.5]">
        Descubra todas os nosso produtos, veja as ofertas e promocões.
      </p>
      <div className="grid grid-cols-[repeat(3,minmax(250px,1fr))] mt-4 grid-rows-[repeat(2,minmax(250px,1fr))] gap-3">
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
              className="h-[100px] object-cover rounded-lg absolute right-8 scale-[4]"
            />
            <div className="content w-full px-3 py-2 pt-8">
              <h3 className="text-5xl font-bold mt-2 ">{category.name}</h3>
              <p className="text-sm max-w-[50%]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
