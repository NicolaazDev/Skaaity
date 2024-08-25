export const skateAccessories = [
  // Rodas
  {
    id: 1,
    name: "Rodas de Skate 34mm - 4 Un.",
    description:
      "Rodas de skate de alta performance com 52mm de diâmetro, ideais para street e park. Pacote com 4 rodas.",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724559816/pngegg_ew5sps.png",
    category: "Rodas",
    brand: "SkatePro",
    stock: 30,
    discount: 0,
    hasDiscount: false,
    discountedPrice: 49.99,
  },
  {
    id: 2,
    name: "Rodas de Skate 52mm - 4 Un.",
    description:
      "Rodas maiores para maior velocidade e controle, com 54mm de diâmetro. Pacote com 4 rodas.",
    price: 54.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724559855/pngegg_1_lwmnto.png",
    category: "Rodas",
    brand: "SkatePro",
    stock: 20,
    discount: 5,
    hasDiscount: true,
    discountedPrice: (54.99 * (1 - 0.05)).toFixed(2),
  },

  // Trucks
  {
    id: 3,
    name: "Trucks Carbono - Par de 5.0",
    description:
      "Trucks de skate duráveis e leves, vendidos em pares. Ideal para todos os tipos de manobras. Inclui parafusos de montagem.",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724560091/pngegg_2_joxs60.png",
    category: "Trucks",
    brand: "Royal",
    stock: 25,
    discount: 10,
    hasDiscount: true,
    discountedPrice: (89.99 * (1 - 0.1)).toFixed(2),
  },
  {
    id: 4,
    name: "Trucks Prata - Par de 6.0",
    description:
      "Trucks mais largos para maior estabilidade, vendidos em pares. Inclui parafusos e arruelas.",
    price: 99.99,
    image:
      "https://royalskateboardtrucks.com/site/assets/images/new_truck/design/800/design_truck_ultra_light_1.png",
    category: "Trucks",
    brand: "Longboard Labs",
    stock: 15,
    discount: 0,
    hasDiscount: false,
    discountedPrice: 99.99,
  },

  // Parafusos
  {
    id: 5,
    name: "Parafusos de Skate - 20 Un.",
    description:
      "Pacote com 20 parafusos para montagem de trucks e rodas. Inclui porcas e arruelas.",
    price: 19.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724559711/imagem_2024-08-25_012100461-removebg-preview_kzflvn.png",
    category: "Parafusos",
    brand: "Penny",
    stock: 50,
    discount: 0,
    hasDiscount: false,
    discountedPrice: 19.99,
  },
  {
    id: 6,
    name: "Parafusos de Skate - 50 Un.",
    description:
      "Pacote com 50 parafusos para montagem. Ideal para quem precisa de mais peças ou realiza manutenção frequente.",
    price: 39.99,
    image:
      "https://www.rideevolve.com.au/cdn/shop/products/pxl_20210414_220719021_clipped_rev_1_480x480.png?v=1637902265",
    category: "Parafusos",
    brand: "Penny",
    stock: 20,
    discount: 10,
    hasDiscount: true,
    discountedPrice: (39.99 * (1 - 0.1)).toFixed(2),
  },

  // Lixa
  {
    id: 7,
    name: "Lixa para Skate - Militar",
    description:
      "Lixa resistente e com alta aderência para um controle preciso do skate. Ideal para aplicação em qualquer shape.",
    price: 14.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724559991/imagem_2024-08-25_012620825-removebg-preview_omwdao.png",
    category: "Lixa",
    brand: "Element",
    stock: 40,
    discount: 5,
    hasDiscount: true,
    discountedPrice: (14.99 * (1 - 0.05)).toFixed(2),
  },
  {
    id: 8,
    name: "Lixa para Skate - Clássica",
    description:
      "Lixa para skate na cor azul, com ótima aderência e durabilidade. Perfeita para personalizar seu shape.",
    price: 16.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724560008/imagem_2024-08-25_012638554-removebg-preview_osseku.png",
    category: "Lixa",
    brand: "Element",
    stock: 30,
    discount: 0,
    hasDiscount: false,
    discountedPrice: 16.99,
  },

  // Cola
  {
    id: 9,
    name: "Cola para Skate - 100ml",
    description:
      "Cola especial para skate, ideal para pequenas reparações e ajustes. Resistente e de rápida secagem.",
    price: 9.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724559904/imagem_2024-08-25_012454436-removebg-preview_gyr9ce.png",
    category: "Cola",
    brand: "Acrilex",
    stock: 25,
    discount: 0,
    hasDiscount: false,
    discountedPrice: 9.99,
  },
  {
    id: 10,
    name: "Cola para Skate - 250ml",
    description:
      "Cola em maior quantidade, ideal para quem realiza reparações mais frequentes. Rápida secagem e resistência.",
    price: 14.99,
    image:
      "https://res.cloudinary.com/dmceve2cp/image/upload/v1724559941/imagem_2024-08-25_012530321-removebg-preview_v6o3cw.png",
    category: "Cola",
    brand: "UniPega",
    stock: 15,
    discount: 5,
    hasDiscount: true,
    discountedPrice: (14.99 * (1 - 0.05)).toFixed(2),
  },
];
