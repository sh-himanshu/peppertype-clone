import helpIcon from "../images/help.svg";

const HelpButton = () => {
  return (
    <div className="w-full absolute right-0 bottom-0 flex items-center justify-end pb-5 pr-10">
      <button className="flex bg-[hsl(228,89%,45%)] p-3 items-center text-xs font-semibold  text-gray-100 rounded-3xl rounded-tr-md tracking-wide">
        <img src={helpIcon} alt="help" className="w-4 mr-2" />
        Need Help ?
      </button>
    </div>
  );
};

export default HelpButton;
