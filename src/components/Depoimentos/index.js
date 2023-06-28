import React from 'react';
import styles from './Depoimentos.module.css';
import depoimentosJson from '../../assets/depoimentos.json'
import Depoimento from '../Depoimento';

export default function Depoimentos() {
  
  return (
    <section className={styles.depoimentos}>

      {depoimentosJson.map((depoimento, index) => (   
          
          <Depoimento
            key={index}
            foto={depoimento.imagem}
            nomeDoAluno={depoimento.nome}
            depoimento={depoimento.depoimento}
          
          />
          
        
        )
      )}

    </section>

  )
}