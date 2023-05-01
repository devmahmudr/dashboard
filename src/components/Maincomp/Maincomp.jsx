import "./maincomp.scss";
import filter from "../../assets/icons/filter.svg";
import sort from "../../assets/icons/sort.svg";
const Maincomp = ({ avatar, title, date, name, time, priority }) => {
  return (
    <div>
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
      <div className="main-bot">
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Ticket details</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ticket-detail">
                  {avatar}
                  <p>{title}</p>
                  <p>Updated 1 day ago</p>
                </td>
                <td>
                  <p>{name}</p>
                  <p>on 24.05.2019</p>
                </td>
                <td>
                  {date}
                  {time}
                </td>
                <td>{priority}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const High = () => {
  return <span className="high">High</span>;
};
const Low = () => {
  return <span className="low">Low</span>;
};
const Normal = () => {
  return <span className="normal">Normal</span>;
};
export{ Maincomp, Normal, Low, High };
