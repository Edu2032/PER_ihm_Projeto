import { Link } from 'react-router-dom'
import './styles.css'
function Acessar() {
    return (
        <>
            <Link to={'/Menu'}>
                <div className="button-inicio">
                    <p>Acessar</p>
                </div>
            </Link>
        </>

    )
}

export default Acessar