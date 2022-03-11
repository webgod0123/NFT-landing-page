const BoxButton = ({
  text,
  onClick,
  styles,
  cssClasses,
}: {
  text: string;
  cssClasses?: string[];
  onClick?: () => void;
  styles?: { [key: string]: string };
}) => {
  return (
    <>
      <button
        className={`custom-btn box-btn ${
          cssClasses ? cssClasses.join(" ") : ""
        }`}
        onClick={onClick}
        style={{ ...styles }}
      >
        {text}
      </button>
    </>
  );
};

export default BoxButton;
