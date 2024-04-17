import "./Clear.css";

export default function Clear({ onHandleClear }) {
  return (
    <div onClick={onHandleClear} className="clear-btn">
      Clear
    </div>
  );
}
