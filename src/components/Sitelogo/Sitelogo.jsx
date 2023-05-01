import "./sitelogo.scss";

const SiteLogo = ({logo, logotitle}) => {
  return(
    <div className="logo">
      {logo} <span className="logotitle">{logotitle}</span>
    </div>
  );
};
export default SiteLogo;
