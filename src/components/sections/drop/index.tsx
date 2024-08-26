export default function DropSection() {
  return (
    <section className="b py-[90px] w-full bg-blue-100 relative overflow-hidden">
      <div className="center !justify-between w-[83%] mx-auto">
        <img
          className="absolute left-0 -rotate-12 h-[350px] opacity-90"
          src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724610826/Design_sem_nome-removebg-preview_xnyruz.png"
        />
        <img
          className="absolute right-0 rotate-12 h-[450px] translate-y-[-15%] opacity-70"
          src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724610826/Design_sem_nome-removebg-preview_xnyruz.png"
        />
        <h2 className="text-3xl z-10 title-gradient font-bold font-poppinsBold tracking-wide">
          Garanta nosso Drop <br />
          antes de todo mundo
        </h2>
        <form className="w-[60%] z-10">
          <div className="flex items-center border-b border-gray-200 py-2">
            <input
              className="appearance-none bg-background h-[55px] rounded-md border-none w-full font-poppinsMedium text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Seu e-mail"
            />
            <button
              className="flex-shrink-0 font-poppinsLight h-[55px] rounded-md bg-primary hover:bg-foreground transition-all text-sm text-background py-2 px-4"
              type="submit"
            >
              Inscrever-se
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
