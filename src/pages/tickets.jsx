import "./Tickets.scss";

import MainSection from "../containers/MainSection/Main";

import SiteBar from "../containers/SideBar/Sitebar";

import Overwievcont from "../containers/overwiev/overwievcont"



const Tickets = () => {
  return (
    <div className="tickets">
      <SiteBar />
      <MainSection/>
    </div>
  );
};

export default Tickets;
