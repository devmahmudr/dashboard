import "./sitebar.scss";
import SiteLogo from "../../components/Sitelogo/Sitelogo";
import SiteBarBtn from "../../components/SitebarBtn/SitebarBtn";
import {
  Overview,
  Settings,
  Subscription,
  Contacts,
  Agents,
  Articles,
  Tickets,
  Ideas,
} from "../../assets/icons/Icons";
import { SiteLogoImg } from "../../assets/icons/search";
const SiteBarBtnArr = [
  {
    title: "Overview",
    icon: <Overview />,
  },
  {
    title: "Tickets",
    icon: <Tickets />,
  },
  {
    title: "Ideas",
    icon: <Ideas />,
  },
  {
    title: "Contacts",
    icon: <Contacts />,
  },
  {
    title: "Agents",
    icon: <Agents />,
  },
  {
    title: "Articles",
    icon: <Articles />,
  },
  {
    title: "Settings",
    icon: <Settings />,
  },
  {
    title: "Subscription",
    icon: <Subscription />,
  },
];

const SiteBar = () => {
  return (
    <div className="sitebar">
      <SiteLogo logo={<SiteLogoImg />} logotitle="Dashboard Kit" />
      {SiteBarBtnArr.map((e) => {
        return <SiteBarBtn key={Math.random()} icon={e.icon} title={e.title}/>;
      })}
    </div>
  );
};

export default SiteBar;
