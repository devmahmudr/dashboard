import "./overwievcomp.scss";

const Overwievcard = ({ title, number }) => {
  return (
    <div className="cards">
      <div className="overw-card">
        <span className="overw-title">{title}</span>
        <span className="overw-num">{number}</span>
      </div>
    </div>
  );
};

export default Overwievcard;
