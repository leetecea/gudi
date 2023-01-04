import React, { useState, useEffect } from 'react'
import  { ListStates }  from '../ListStatesBR'
import '../SearchBar/searchBarStyle.sass'

export default function SearchBar() {

  const [input, setInput] = useState<string>();
  const [novaLista, setNovaLista] = useState<string[]>([]);

  useEffect(() => {
    const ListaFiltrada = ListStates.filter((item: string) => {
      if (input) {
        if (item.toLowerCase().includes(input.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    setNovaLista(ListaFiltrada);
  }, [input]);
  
  return (
    <section className='contain-search'>
      <h2>Para qual estado você deseja ir?</h2>
      <input value={input} placeholder="Pesquisar" onChange={(e) => setInput(e.target.value)} />
      <ul className='searchList'>
        {novaLista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button>Buscar</button>
    </section>
  )
}
