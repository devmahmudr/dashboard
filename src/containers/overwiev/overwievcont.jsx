import "./overwievcont.scss";
import Overwievcard from "../../components/overwievcomp/overwievcomp";
import OverwievMain from "../../components/overwievmaincomp/omaincomp";
const Dtbase1 = [
  {
    id: 1,
    title: "Unresolved",
    number: 60,
  },
  {
    id: 2,
    title: "Overdue",
    number: 16,
  },
  {
    id: 3,
    title: "Open",
    number: 43,
  },
  {
    id: 4,
    title: "On hold",
    number: 64,
  },
];

const Overwievcont = () => {
  return (
    <div>
      <div className="cards-holder">
        {Dtbase1.map((e) => {
          return <Overwievcard key={e.id} title={e.title} number={e.number} />;
        })}
      </div>
      <div>
        <OverwievMain />
      </div>
    </div>
  );
};

export default Overwievcont;
