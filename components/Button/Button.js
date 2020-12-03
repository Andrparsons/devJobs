import styles from "./Button.module.css";

const Button = ({
  children,
  btnStyle = "primary",
  action
}) => {
  let classStyle = styles[btnStyle];
  return (
    <button className={classStyle} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
