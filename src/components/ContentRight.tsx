import ellipse from "../images/ellipse.svg";

const ContentRight = () => {
  return (
    <div className="flex flex-col text-center px-14 my-16 lg:my-0">
      <h2 className="text-xl font-medium mb-8">
        A few clicks away from an awesome writing experience
      </h2>
      <div className="relative flex items-center justify-center">
        <img src={ellipse} alt="shapes" />
        <div className="text-md absolute">
          <p>
            <span className="font-bold">50K+</span> Peppertypes
          </p>
          <p>trust us with their content</p>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
