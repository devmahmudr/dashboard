import { useState } from "react";
import "./sitebarbtn.scss";

const SiteBarBtn = ({ icon, title }) => {
  const [avctive,setActive] = useState()
  return (
    <button className={`btn ${avctive == "active" ? "active" : " " }`} onClick={()=> setActive("active")}>
      <span className="btn-icon">{icon}</span>
      <span>{title}</span>
    </button>
  );
};

export default SiteBarBtn;
