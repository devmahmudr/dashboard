import "./maincard.scss";

const Maincard = ({title,number})=>{
    return(
        <div className="main-wrapper-card">
            <p className="main-card-title">{title}</p>
            <p className="main-card-number">{number}</p>
        </div>
    )
}
export default Maincard