export const boards = [
  {
    id: 1,
    name: "Léo Novamente",
    description:
      "Um skate completo montado com o shape Maple Léo Novamente, perfeito para manobras e cruzeiros pela cidade. Inclui trucks, rodas, rolamentos e lixa de alta qualidade.",
    price: 349.99,
    image: "http://pngimg.com/uploads/skateboard/skateboard_PNG11709.png", // Adicione uma URL de imagem apropriada
    category: "Street",
    brand: "SkatePro",
    size: '8.0" x 31.75"',
    material: "Maple Canadense",
    stock: 10,
    designType: "Parceria Especial",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 349.99, // Preço sem desconto
  },
  {
    id: 2,
    name: "Japan Tokyo",
    description:
      "Skate completo montado com o shape Maple Japan Tokyo, ideal para altas velocidades e descidas íngremes. Equipado com trucks, rodas, rolamentos e lixa premium.",
    price: 369.99,
    image: "http://pngimg.com/uploads/skateboard/skateboard_PNG11748.png", // Adicione uma URL de imagem apropriada
    category: "Downhill",
    brand: "Longboard Labs",
    size: '9.5" x 39"',
    material: "Bamboo e Fibra de Vidro",
    stock: 8,
    designType: "Cultural",
    discount: 10, // 10% de desconto
    hasDiscount: true,
    discountedPrice: (369.99 * (1 - 0.1)).toFixed(2), // Preço com desconto
  },
  {
    id: 3,
    name: "Love Girls Pink Head",
    description:
      "Complete com o shape Maple Love Girls Pink Head, ideal para skateparks e half-pipes. Inclui todos os componentes essenciais para uma experiência de skate completa.",
    price: 359.99,
    image:
      "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Png-Skate-com-Desenho-de-Pirata.png", // Adicione uma URL de imagem apropriada
    category: "Park",
    brand: "Element",
    size: '8.25" x 32"',
    material: "Maple Canadense",
    stock: 12,
    designType: "Artístico",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 359.99, // Preço sem desconto
  },
  {
    id: 4,
    name: "Eletric Skate Street",
    description:
      "Skate completo com o shape Maple Love Girls Red Head, projetado para cruzeiros urbanos e velocidade. Inclui trucks, rodas, rolamentos e lixa de alta performance.",
    price: 779.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724558318/imagem_2024-08-25_005826648-removebg-preview_xnrtkr.png", // Adicione uma URL de imagem apropriada
    category: "Elétrico",
    brand: "Boosted Boards",
    size: '9.0" x 38"',
    material: "Bamboo",
    stock: 5,
    designType: "Artístico",
    discount: 15, // 15% de desconto
    hasDiscount: true,
    discountedPrice: (779.99 * (1 - 0.15)).toFixed(2), // Preço com desconto
  },
  {
    id: 5,
    name: "Japan Bird",
    description:
      "Skate completo montado com o shape Maple Japan Bird, compacto e portátil para transporte rápido. Inclui todos os componentes para um desempenho ágil e durável.",
    price: 339.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724558248/imagem_2024-08-25_005717941-removebg-preview_rizsop.png",
    brand: "Penny",
    size: '7.5" x 22"',
    material: "Plástico Reforçado",
    stock: 15,
    designType: "Cultural",
    discount: 5,
    hasDiscount: true,
    discountedPrice: (339.99 * (1 - 0.05)).toFixed(2),
  },
  {
    id: 6,
    name: "Dalua Uretano",
    description:
      "Um longboard completo montado com o shape Dalua Uretano, ideal para rampas verticais. Equipado com trucks, rodas, rolamentos e lixa de alta qualidade.",
    price: 429.99,
    image: "http://pngimg.com/uploads/skateboard/skateboard_PNG11733.png",
    category: "Vert",
    brand: "Powell Peralta",
    size: '8.5" x 32.5"',
    material: "Maple Canadense c/ Fibra de Carbono",
    stock: 6,
    designType: "Profissional",
    discount: 20,
    hasDiscount: true,
    discountedPrice: (429.99 * (1 - 0.2)).toFixed(2),
  },
];
