import Add from '../../Components/Add'
import ArrowLeft from '../../Components/ArrowLeft'
import ArrowRight from '../../Components/ArrowRight'
import Min from '../../Components/Min'
import './styles.css'

type Props = {
    text: string;
    text2: string;
    text3: string;
}


function Menu({ text, text2, text3 }: Props) {

    return (
        <div>
            <div className='text-title'>
                <div className='text'>
                    <p>Receita</p>
                    <p>{text3}</p>
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
                <p>{text}</p>
            </div>
            <div className='text-principal'>
                <p>{text2}</p>
            </div>
        </div>
    )
}

export default Menu