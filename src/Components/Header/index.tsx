import Gudi from '../../assets/gudi.svg'
import { Link } from 'react-router-dom'
import Sobre from '../../pages/Sobre'
import Beneficios from '../../pages/Beneficios'
import Contato from '../../pages/Contato'
import Agendar from '../../pages/Agendar'
import '../Header/headerStyle.sass'
import SearchBar from '../SearchBar'


export default function Header() {
  return (
    <> 
      <section>
        <Link to='/'>
          <img src={Gudi} alt="Gudi" />
          <p>O bom da vida é viver</p>
        </Link>
        <nav>
          <ul className="navbar">
            <Link to='/sobre'><li>Sobre</li></Link>
            <Link to='/beneficios'><li>Benefícios</li></Link>
            <Link to='/contato'><li>Contato</li></Link>
            <Link to='/agendar'><li className="agendar">Agendar</li></Link>   
          </ul>
        </nav>
      </section>
      <section className='imagemKombi'>
        <SearchBar />  
      </section>
    </>
  )
}
