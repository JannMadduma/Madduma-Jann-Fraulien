import "../css/mystyle.css";
const percentToDecimal = (decimal) => {
  return decimal.toFixed(3) + "%";
};
const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};
const markScore = (total, goal) => {
  if (total / goal < 75) {
    return "failed";
  } else return "passed";
};
export const CalculatorScore = ({ name, school, total, goal }) => {
  return (
    <div className="formatstyle">
      <h1>Student Details</h1>
      <div className="name">
        <b>Name:</b>
        <span>{name}</span>
      </div>
      <div className="school">
        <b>School:</b>
        <span>{school}</span>
      </div>
      <div className="total">
        <b>Total:</b>
        <span>{total}</span>
      </div>
      <div className="score">
        <b>Score:</b>
        <span>{calcScore(total, goal)}</span>
        <span>{markScore(total, goal)}</span>
      </div>
    </div>
  );
};

export default CalculatorScore;
