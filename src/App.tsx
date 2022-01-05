import logo from "./images/logo.svg";
import ContentRight from "./components/ContentRight";
import Welcome from "./components/Welcome";
import HelpButton from "./components/HelpButton";

const App = () => {
  return (
    <div className="flex lg:flex-row flex-col h-screen w-screen text-gray-800 transition-all delay-75">
      <div className="basis-4/6 h-full flex flex-col">
        <img
          src={logo}
          alt="peppertype.ai"
          className="w-40 ml-4 lg:ml-8 mt-6"
        />
        <Welcome />
      </div>
      <div className="basis-1/3 h-full bg-orange-50 flex flex-col relative items-center justify-center font-[Poppins]">
        <ContentRight />
        <HelpButton />
      </div>
    </div>
  );
};

export default App;
