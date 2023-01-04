import React from 'react'
import CardPost from '../CardPost/Card'
import CardPostReverse from '../CardPost/CardReverse'
import Baloes from '../../assets/baloes.png'
import Amigos from '../../assets/amigos.png'
import CirculoPessoas from '../../assets/circuloagua.png'

import './mainStyle.sass'

export default function Main() {
  return (
  <>
    <section className="Card">
          <img src={Baloes} alt="Casal sorrindo com balões de ar quente no fundo"/>
          <section className="CardPost">
            <div className='Post'>
              <div className='PostTop'>
                <div className="trace"></div>
                <p>Viagens nacionais</p>
              </div>
              <h2>O clima perfeito, no lugar perfeito</h2>
              <p>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
              <button>Agendar</button>
            </div>
          </section>
      </section>

      <section className="Card">
        <section className="CardPost Reverse">
          <div className='Post'>
            <div className='PostTop'>
              <div className="trace"></div>
              <p>Viagens nacionais</p>
            </div>
            <h2>Curta uma nova vibe entre amigos</h2>
            <p>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <span>Planos Multi</span>.</p>
            <button>Agendar</button>
          </div>
        </section>
        <img src={Amigos} alt="Grupo de amigos num círculo com paisagem de montanhas ao fundo."/>
      </section>

      <section className="Card">
          <img src={CirculoPessoas} alt="Círculo de pessoas boiando em água cristalina do mar."/>
          <section className="CardPost">
            <div className='Post'>
              <div className='PostTop'>
                <div className="trace"></div>
                <p>Viagens nacionais</p>
              </div>
              <h2 className='titleCircle'>Algumas experiências são inexplicáveis</h2>
              <p>Conheça as fontes termais de <span>Caldas Novas, Goiás</span>. Águas quentes, num clima sereno, relaxante e natural.</p>
              <button>Agendar</button>
            </div>
          </section>
      </section> 
  </>
  )
}
