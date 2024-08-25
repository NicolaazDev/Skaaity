import { shapes } from "@/data/shapes"; // Assumindo que o array de skateboards está nesse caminho
import "./shapes.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeartIcon, PackagePlusIcon } from "lucide-react";

export default function Shapes() {
  return (
    <section className="w-full h-[100vh] bg-background relative mx-auto px-4 py-8 center-col">
      <h2 className="text-7xl text-gradient font-[400] text-center w-auto leading-[1.2] font-poppinsBold">
        Shapes
      </h2>
      <p className="font-poppinsLight leading-[2.5] text-center w-full">
        Descubra todos os nossas artes de skateboards, veja as ofertas e
        promoções.
      </p>
      <Carousel
        opts={{
          align: "start",
          active: true,
        }}
        className="w-[85%] mx-auto"
      >
        <CarouselPrevious className="border border-solid border-gray-700 h-[90px] w-[90px] hover:border-primary hover:bg-white hover:text-primary z-20 !bg-white" />
        <CarouselContent className="w-[100%] -ml-3">
          {shapes.map((shapes, index) => (
            <CarouselItem key={index} className={`max-w-[100%] basis-1/3`}>
              <div className="center-col board-item h-full !justify-between py-5 bg-gray-100 rounded-[8px] border-transparent border border-solid transition-all cursor-pointer">
                <img
                  src={shapes.image}
                  alt={shapes.name}
                  className="h-[300px] object-cover rounded-lg scale-[1.9] transition-all rotate-45"
                />
                <div className="content w-[90%] mx-auto px-3 py-2 pt-8">
                  <h3 className="text-5xl font-[900] secondarytext-gradient mt-2 text-center max-w-[100%] mx-auto">
                    {shapes.name}
                  </h3>
                  <div className="center gap-2 mt-3 flex-wrap">
                    <div className="center basis-[33%] secondary-gradient  text-gray-200 px-2 h-[30px] rounded-lg cursor-pointer whitespace-nowrap">
                      <span>Marca</span>
                      <div className="separator"></div>
                      <span className="font-poppinsLight">{shapes.brand}</span>
                    </div>
                    <div className="center basis-[33%] secondary-gradient text-gray-200 px-2 h-[30px] rounded-lg cursor-pointer whitespace-nowrap">
                      <span>Tipo</span>
                      <div className="separator"></div>
                      <span className="font-poppinsLight">
                        {shapes.designType}
                      </span>
                    </div>
                    <div className="center basis-[60%] secondary-gradient text-gray-200 px-2 h-[30px] rounded-lg cursor-pointer whitespace-nowrap">
                      <span>Material</span>
                      <div className="separator"></div>
                      <span className="font-poppinsLight">
                        {shapes.material}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="price-section w-[90%] mt-8 center">
                  <div className="relative center !items-end w-full !justify-between">
                    <div className="center-col !items-start">
                      {shapes.hasDiscount && (
                        <span className="text-[0.9rem] opacity-80 line-through font-bold text-gray-900">
                          R${shapes.price.toFixed(2)}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-gray-900">
                        R$
                        {shapes.hasDiscount
                          ? shapes.discountedPrice
                          : shapes.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="center">
                      <button className="action-button center">
                        <PackagePlusIcon />
                      </button>
                      <button className="action-button center">
                        <HeartIcon />
                      </button>
                    </div>
                  </div>

                  {shapes.hasDiscount && (
                    <span className="text-[0.9rem] rounded-md p-1 text-background mt-1 bg-green-400 absolute top-5 left-3">
                      {shapes.discount}% de desconto
                    </span>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="border border-solid border-gray-700 h-[90px] w-[90px] hover:border-primary hover:bg-white hover:text-primary" />
      </Carousel>
    </section>
  );
}
