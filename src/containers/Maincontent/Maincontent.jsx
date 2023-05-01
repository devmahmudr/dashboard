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
import { Low, Normal, High } from "../../components/Maincomp/Maincomp";

const DtBase = [
  {
    avatar: { Tom },
    title: "Contact Email not Linked",
    name: "Tom Cruise",
    date: "May 26, 2019",
    time: "6:30 PM",
    priority: { High },
  },
  {
    avatar: { Matt },
    title: "Adding Images to Featured Posts",
    name: "Matt Damon",
    date: "May 26, 2019",
    time: "8:00 AM",
    priority: { Low },
  },
];

const Maincontent = () => {
  return (
    <div className="maincontainer">
      {DtBase.map((e) => {
        return (
          <Maincomp
            key={Math.random()}
            avatar={e.avatar}
            title={e.title}
            naem={e.name}
            date={e.date}
            time={e.time}
            priority={e.priority}
          />
        );
      })}
    </div>
  );
};

export default Maincontent;
