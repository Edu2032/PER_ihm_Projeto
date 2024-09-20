import { Link } from 'react-router-dom'
import per from '../../assets/img/per_logo.png'
import './styles.css'
function Header() {

    return (
            <div className="header">
                <Link to={'/'}>
                <img src={per} alt="logo" />
                </Link>     
                <p>Automação Industrial</p>
            </div>
    )
}

export default Header