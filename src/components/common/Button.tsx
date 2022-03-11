const Button = ({
  text,
  onClick,
  styles,
  cssClasses,
}: {
  text: string;
  onClick?: () => void;
  styles?: { [key: string]: string };
  cssClasses?: string[];
}) => {
  return (
    <>
      <button
        className={`custom-btn ${cssClasses ? cssClasses.join(" ") : ""}`}
        onClick={onClick}
        style={{ ...styles }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
