import "./headercomp.scss";

import notification from "../../assets/icons/notification.svg"
import avatar from "../../assets/avatar.png"
const HeaderComp = ({ Search }) => {
  return (
    <div className="header">
      <div className="header-left">Tickets</div>
      <div className="header-right">
        {Search}
        <img src={notification} alt="" className="notification"/>
        <hr className="hr1"/>
        <p className="header-title">Jones Ferdinand</p>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default HeaderComp;
