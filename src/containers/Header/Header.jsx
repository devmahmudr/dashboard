import './header.scss'

import HeaderComp from '../../components/Header/Headercomp'
import{
    Search
} from '../../assets/icons/search'

const Header = ()=>{
    return(
        <div>
            <HeaderComp Search={<Search/>}/>
        </div>
    )
}

export default Header