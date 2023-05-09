import "./omaincomp.scss";
import Maincard from "../maincard/maincard";

let MaincardBase = [
  {
    title: "Resolved",
    number: 449,
  },
  {
    title: "Received",
    number: 426,
  },
  {
    title: "Average first response time",
    number: "33m",
  },
  {
    title: "Average response time",
    number: "3h 8m",
  },
  {
    title: "Resolution within SLA",
    number: "94%",
  },
];
const OverwievMain = () => {
  return (
    <div className="Overwievmain">
      <div className="main-left">
        <div className="left-card">
          <div className="left-item">
            <p>Today’s trends</p>
            <p>as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="right-item">
            <p>Today</p>
            <p>Yesterday</p>
          </div>
        </div>
      </div>
      <div className="main-right">
        {MaincardBase.map((e) => {
          return <Maincard key={Math.random()} title={e.title} number={e.number} />;
        })}
      </div>
    </div>
  );
};
export default OverwievMain;
