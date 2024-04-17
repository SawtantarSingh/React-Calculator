import "./Button.css";
export default function Button({ children, onHandleClick }) {
  const isOperator = (operator) => {
    return !isNaN(operator) || operator === "." || operator === "=";
  };

  return (
    <div
      onClick={() => onHandleClick(children)}
      className={`button-wrapper ${isOperator(children) ? null : "operator"}`}
    >
      {children}
    </div>
  );
}
