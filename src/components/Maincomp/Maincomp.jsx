import "./maincomp.scss";
const Maincomp = ({ title, date, name, time, priority, avatar}) => {
  return (
    <div className="main-content">
      <div className="main-bot">
        <div className="card">
          <table>
            <tbody>
              <tr>
                <td className="ticket-detail">
                  <img src={avatar} alt="" />
                  <div>
                    <p className="ticket-detail-title">{title}</p>
                    <p className="ticket-detail-subtitle">Updated 1 day ago</p>
                  </div>
                </td>
                <td className="name-date">
                  <p className="name">{name}</p>
                  <p className="date">on 24.05.2019</p>
                </td>
                <td className="date-time">
                  <p className="date2">{date}</p>
                  <p className="time">{time}</p>
                </td>
                <td className="priority">{priority}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Maincomp;
