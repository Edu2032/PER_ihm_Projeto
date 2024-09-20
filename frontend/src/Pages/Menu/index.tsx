import per from '../../assets/img/per_logo.png'
import Add from '../../Components/Add'
import ArrowLeft from '../../Components/ArrowLeft'
import ArrowRight from '../../Components/ArrowRight'
import Min from '../../Components/Min'
import './styles.css'
function Menu() {

    return (
        <div>
            <div className='text-title'>
                <img src={per} alt="logo" />
                <div className='text'>
                    <p>Receita</p>
                    <p>#############</p>
                </div>
            </div>
            <div className='btn-peso'>
                <Add />
                <Min />
                <div className='btn-move'>
                    <ArrowLeft />
                    <ArrowRight />
                </div>
            </div>
            <div className='text-gross'>
                <p>Peso</p>
                <p>####</p>
            </div>
            <div className='text-principal'>
                <p>####</p>
            </div>
        </div>
    )
}

export default Menu