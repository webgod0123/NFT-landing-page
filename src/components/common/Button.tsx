const Button = ({
  text,
  onClick,
  styles,
}: {
  text: string;
  onClick?: () => void;
  styles?: { [key: string]: string };
}) => {
  return (
    <>
      <button className={"custom-btn"} onClick={onClick} style={{ ...styles }}>
        {text}
      </button>
    </>
  );
};

export default Button;
