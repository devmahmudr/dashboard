import "./main.scss";
import Maincontent from "../Maincontent/Maincontent";

import Header from "../Header/Header";
const MainSection = () => {
  return (
    <div className="main">
      <Header />
      <Maincontent/>
    </div>
  );
};

export default MainSection;
