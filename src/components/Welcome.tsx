interface ButtonProps {
  active?: boolean;
  text: string;
}

const Button = ({ active = false, text }: ButtonProps) => {
  console.log(active);
  return (
    <button
      className={`rounded-md py-2 px-4 font-semibold hover:shadow-md ${
        active
          ? "bg-[hsl(228,89%,45%)] text-gray-100 hover:text-white hover:bg-[hsl(228,89%,30%)]"
          : " bg-gray-50 text-slate-500 hover:bg-gray-300 hover:text-slate-700"
      }`}
    >
      {text}
    </button>
  );
};

const Welcome = () => {
  return (
    <section className="font-[Poppins]  flex items-center justify-start px-4 lg:px-16 py-8 lg:py-0 h-full">
      <div className="max-w-2xl ">
        <h2 className="text-2xl">
          Hi Siva <span className="font-medium font-semiboldfont-fa">👋</span>
        </h2>
        <h1 className="text-3xl font-semibold pb-5 pt-3">
          Welcome to Peppertype.ai
        </h1>
        <p className="text-md font-sans font-medium">
          Congratulations on taking your first step towards creating content,
          the mordern way !
        </p>
        <p className="text-md font-sans font-medium mt-8">
          Help us tailor an amazing experience for you by asking these questions
        </p>
        <div className="flex space-x-3 my-8">
          <Button text="Skip for now" />
          <Button text="Continue" active />
        </div>
        <p className="text-gray-500  text-sm">
          Get the most out of it -{" "}
          <a className="font-bold underline hover:text-gray-800">
            Book a live demo
          </a>
        </p>
      </div>
    </section>
  );
};

export default Welcome;
