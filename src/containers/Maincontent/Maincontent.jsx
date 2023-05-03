import "./maincontent.scss";

import Maincomp from "../../components/Maincomp/Maincomp";
import Chris from "../../assets/avatars/chris.png";
import Chrs from "../../assets/avatars/chrs.png";
import Henry from "../../assets/avatars/henry.png";
import Matt from "../../assets/avatars/matt.png";
import Robert from "../../assets/avatars/robert.png";
import Sam from "../../assets/avatars/sam.png";
import Steve from "../../assets/avatars/steve.png";
import Tom from "../../assets/avatars/tom.png";

const DtBase = [
  {
    avatar: Chris,
    name: "Chris",
    priority: "High",
    date: "May 26, 2019",
    time: "6:30 PM",
  },
  {
    avatar: Tom,
    name: "Chris",
    priority: "High",
    date: "May 26, 2019",
    time: "6:30 PM",
  },
];

const Table = () => {
  return (
    <div className="maincontainer">
      {DtBase.map((e) => {
        return (
          <Maincomp
            key={Math.random()}
            avatar={e.avatar}
            name={e.name}
            priority={e.priority}
            date={e.date}
            time={e.time}
          />
        );
      })}
    </div>
  );
};

export default Table;
