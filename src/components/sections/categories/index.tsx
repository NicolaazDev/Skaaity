export default function Categories() {
  const categories = [
    {
      name: "Masculino",
      image: "https://source.unsplash.com/random/800x600?men,fashion",
    },
    {
      name: "Feminino",
      image: "https://source.unsplash.com/random/800x600?women,fashion",
    },
    {
      name: "Crianças",
      image: "https://source.unsplash.com/random/800x600?kids,fashion",
    },
    {
      name: "Esportes",
      image: "https://source.unsplash.com/random/800x600?sports,fashion",
    },
    {
      name: "Acessórios",
      image: "https://source.unsplash.com/random/800x600?accessories,fashion",
    },
  ];

  return (
    <section className="w-full h-[100vh] bg-background relative mx-auto px-4 py-8">
      <h2 className="text-7xl font-[400] text-start font-river mb-8">
        Categorias
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg shadow-lg p-4"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-center font-bold text-xl mt-2">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
