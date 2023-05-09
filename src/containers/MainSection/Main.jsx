import "./main.scss";
import Table from "../Maincontent/Maincontent";
import Overwievcont from "../overwiev/overwievcont"
import Header from "../Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="main">
      <Header />
        <Routes>
          <Route path="/tickets" element={<Table/>}/>
          <Route path="/overview" element={<Overwievcont/>}/>
        </Routes>
    </div>
  );
};

export default MainSection;
