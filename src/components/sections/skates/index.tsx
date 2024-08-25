import { boards as skateboards } from "@/data/boards";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeartIcon, PackagePlusIcon } from "lucide-react";

export default function Skateboards() {
  return (
    <section className="w-full h-[100vh] bg-background relative mx-auto px-4 py-8 center-col">
      <h2 className="text-7xl text-gradient font-[400] text-center w-auto leading-[1.2] font-poppinsBold">
        Skateboards
      </h2>
      <p className="font-poppinsLight leading-[2.5] text-center w-full">
        Está com preguiça de criar um skate? confira nossos skates montados!
      </p>
      <Carousel
        opts={{
          align: "start",
          active: true,
        }}
        className="w-[85%] mx-auto mt-10"
      >
        <CarouselPrevious className="border border-solid border-gray-700 h-[90px] w-[90px] hover:border-primary hover:bg-white hover:text-primary z-20 !bg-white" />
        <CarouselContent className="w-[100%] -ml-3">
          {skateboards.map((skateboard, index) => (
            <CarouselItem key={index} className={`max-w-[100%] basis-1/3`}>
              <div className="center-col board-item h-full !justify-between py-5 bg-gray-100 rounded-[8px] border-transparent border border-solid transition-all cursor-pointer">
                <img
                  src={skateboard.image}
                  alt={skateboard.name}
                  className="h-[300px] object-cover rounded-lg scale-[1.4] transition-all rotate-45"
                />
                <div className="content w-[90%] mx-auto px-3 py-2 pt-8">
                  <h3 className="text-5xl font-[900] secondarytext-gradient mt-2 text-center max-w-[100%] mx-auto">
                    {skateboard.name}
                  </h3>
                  <div className="center gap-2 mt-3 flex-wrap">
                    <div className="center basis-[33%] secondary-gradient  text-gray-200 px-2 h-[30px] rounded-lg cursor-pointer whitespace-nowrap">
                      <span>Marca</span>
                      <div className="separator"></div>
                      <span className="font-poppinsLight">
                        {skateboard.brand}
                      </span>
                    </div>
                    <div className="center basis-[33%] secondary-gradient text-gray-200 px-2 h-[30px] rounded-lg cursor-pointer whitespace-nowrap">
                      <span>Tipo</span>
                      <div className="separator"></div>
                      <span className="font-poppinsLight">
                        {skateboard.designType}
                      </span>
                    </div>
                    <div className="center basis-[60%] secondary-gradient text-gray-200 px-2 h-[30px] rounded-lg cursor-pointer whitespace-nowrap">
                      <span>Material</span>
                      <div className="separator"></div>
                      <span className="font-poppinsLight">
                        {skateboard.material}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="price-section w-[90%] mt-8 center">
                  <div className="relative center !items-end w-full !justify-between">
                    <div className="center-col !items-start">
                      {skateboard.hasDiscount && (
                        <span className="text-[0.9rem] opacity-80 line-through font-bold text-gray-900">
                          R${skateboard.price.toFixed(2)}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-gray-900">
                        R$
                        {skateboard.hasDiscount
                          ? skateboard.discountedPrice
                          : skateboard.price.toFixed(2)}
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

                  {skateboard.hasDiscount && (
                    <span className="text-[0.9rem] rounded-md p-1 text-background mt-1 bg-green-400 absolute top-5 left-3">
                      {skateboard.discount}% de desconto
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
