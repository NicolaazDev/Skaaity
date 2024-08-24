export const skateboards = [
  {
    id: 1,
    name: "Shape Maple Léo Novamente",
    description: "Perfeito para manobras e cruzeiros pela cidade.",
    price: 199.99,
    image:
      "https://superskate.com.br/wp-content/uploads/2023/12/disco_voador_shape_maple_canadense.png",
    category: "Street",
    brand: "SkatePro",
    size: '8.0" x 31.75"',
    material: "Maple Canadense",
    stock: 15,
    designType: "Parceria Especial",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 199.99, // Preço sem desconto
  },
  {
    id: 2,
    name: "Shape Maple Japan Tokyo",
    description: "Feito para altas velocidades e descidas íngremes.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/japan-tokyo1-e809cdc36661f5fa7416795158197244-480-0.webp",
    category: "Downhill",
    brand: "Longboard Labs",
    size: '9.5" x 39"',
    material: "Bamboo e Fibra de Vidro",
    stock: 10,
    designType: "Cultural",
    discount: 10, // 10% de desconto
    hasDiscount: true,
    discountedPrice: (199.99 * (1 - 0.1)).toFixed(2), // Preço com desconto
  },
  {
    id: 3,
    name: "Shape Maple Love Girls Pink Head",
    description: "Ideal para skateparks e half-pipes.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/love-girls-pink-head1-587ebcebdc86e28f8716795163364489-1024-1024.webp",
    category: "Park",
    brand: "Element",
    size: '8.25" x 32"',
    material: "Maple Canadense",
    stock: 20,
    designType: "Artístico",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 199.99, // Preço sem desconto
  },
  {
    id: 4,
    name: "Shape Maple Love Girls Red Head",
    description: "Cruze pela cidade com facilidade usando este skate elétrico.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/love-girls-red-head1-f4b71cf96fa2e9ce2b16795164154031-1024-1024.webp",
    category: "Elétrico",
    brand: "Boosted Boards",
    size: '9.0" x 38"',
    material: "Bamboo",
    stock: 5,
    designType: "Artístico",
    discount: 15, // 15% de desconto
    hasDiscount: true,
    discountedPrice: (199.99 * (1 - 0.15)).toFixed(2), // Preço com desconto
  },
  {
    id: 5,
    name: "Shape Maple Japan Bird",
    description: "Compacto e portátil, ideal para transporte rápido.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/japan-bird1-f7b568dd6987eefec716795156490345-1024-1024.webp",
    category: "Cruiser",
    brand: "Penny",
    size: '7.5" x 22"',
    material: "Plástico Reforçado",
    stock: 25,
    designType: "Cultural",
    discount: 5, // 5% de desconto
    hasDiscount: true,
    discountedPrice: (199.99 * (1 - 0.05)).toFixed(2), // Preço com desconto
  },
  {
    id: 6,
    name: "Shape LongBoard Dalua Uretano",
    description: "Domine as rampas verticais com este board resistente.",
    price: 279.99,
    image:
      "https://images.tcdn.com.br/img/img_prod/921115/shape_longboard_hondar_9_3_pro_model_dougulas_dalua_uretano_587_1_da0730942aad19671690758cb7fcfa6d_20220707171754.png",
    category: "Vert",
    brand: "Powell Peralta",
    size: '8.5" x 32.5"',
    material: "Maple Canadense c/ Fibra de Carbono",
    stock: 8,
    designType: "Profissional",
    discount: 20, // 20% de desconto
    hasDiscount: true,
    discountedPrice: (279.99 * (1 - 0.2)).toFixed(2), // Preço com desconto
  },
  {
    id: 7,
    name: "Shape Maple Skull Dinamite",
    description: "Perfeito para truques criativos e liberdade total.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/caveira-dinamite1-0edaaa3d63698d29d916795143767424-1024-1024.webp",
    category: "Freestyle",
    brand: "Globe",
    size: '7.75" x 31.5"',
    material: "Maple Canadense",
    stock: 12,
    designType: "Temático",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 199.99, // Preço sem desconto
  },
  {
    id: 8,
    name: "Shape Maple Desert Sunshine",
    description: "Domine as rampas verticais com este board resistente.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/desert-sunshine1-d2e92533408a212b8616795152086573-1024-1024.webp",
    category: "Vert",
    brand: "Powell Peralta",
    size: '8.5" x 32.5"',
    material: "Maple Canadense c/ Fibra de Carbono",
    stock: 8,
    designType: "Paisagístico",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 199.99, // Preço sem desconto
  },
  {
    id: 9,
    name: "Shape Maple On Fire Blue",
    description:
      "Um design clássico para aqueles que gostam de um visual vintage.",
    price: 199.99,
    image:
      "https://acdn.mitiendanube.com/stores/002/907/587/products/on-fire-blue1-dcaaf58f64c707363c16795166548673-1024-1024.webp",
    category: "Retro",
    brand: "Santa Cruz",
    size: '8.0" x 30.75"',
    material: "Maple Canadense",
    stock: 18,
    designType: "Clássico",
    discount: 0, // Sem desconto
    hasDiscount: false,
    discountedPrice: 199.99, // Preço sem desconto
  },
];
