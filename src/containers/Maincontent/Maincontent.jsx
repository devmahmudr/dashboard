import "./maincontent.scss";
import filter from "../../assets/icons/filter.svg";
import sort from "../../assets/icons/sort.svg";
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
    avatar: Tom,
    name: "Tom Cruise",
    priority: "High",
    date: "May 26, 2019",
    time: "6:30 PM",
    title: "Contact Email not Linked",
  },
  {
    avatar: Matt,
    name: "Matt Damon",
    priority: "low",
    date: "May 26, 2019",
    time: "8:00 AM",
    title: "Adding Images to Featured Posts",
  },
  {
    avatar: Robert,
    name: "Robert Downey",
    priority: "high",
    date: "May 26, 2019",
    time: "7:30 PM",
    title: "When will I be charged this month?",
  },
  {
    avatar: Chrs,
    name: "Christian Bale",
    priority: "normal",
    date: "May 26, 2019",
    time: "5:00 PM",
    title: "Payment not going through",
  },
  {
    avatar: Henry,
    name: "Henry Cavil",
    priority: "High",
    date: "May 26, 2019",
    time: "4:00 PM",
    title: "Unable to add replies",
  },
  {
    avatar: Chris,
    name: "Chris Evans",
    priority: "normal",
    date: "May 26, 2019",
    time: "2:00 PM",
    title: "Downtime since last week",
  },
  {
    avatar: Sam,
    name: "Sam Smith",
    priority: "low",
    date: "May 26, 2019",
    time: "11:30 AM",
    title: "Referral Bonus",
  },
  {
    avatar: Steve,
    name: "Steve Rogers",
    priority: "low",
    date: "May 26, 2019",
    time: "1:00 PM",
    title: "How do I change my password?",
  },
];

const Table = () => {
  return (
    <div className="maincontainer">
      <div className="main-top">
        <p className="main-top-title">All tickets</p>
        <div className="sort-filter">
          <p>
            <img src={sort} alt="" />
            Sort
          </p>
          <p>
            <img src={filter} alt="" />
            Filter
          </p>
        </div>
      </div>
      <thead>
        <tr>
          <th>Ticket details</th>
          <th>Customer name</th>
          <th>Date</th>
          <th>Priority</th>
        </tr>
      </thead>
      {DtBase.map((e) => {
        return (
          <Maincomp
            key={Math.random()}
            avatar={e.avatar}
            title={e.title}
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
