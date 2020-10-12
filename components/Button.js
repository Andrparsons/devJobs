import styles from "./Button.module.css";

const Button = ({
  children,
  btnStyle = "primary",
  handleClick = () => {
    console.log("button pressed!");
  },
}) => {
  let classStyle = styles[btnStyle];
  return (
    <button className={classStyle} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
