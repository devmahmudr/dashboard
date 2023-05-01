import "./sitebarbtn.scss"

const SiteBarBtn = ({icon, title})=>{
    return(
        <button className="btn">
            <span className="btn-icon">
                {icon}
            </span>
            <span>
                {title}
            </span>
        </button>
    )
}

export default SiteBarBtn;