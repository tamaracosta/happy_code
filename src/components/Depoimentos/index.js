import React from 'react';
import styles from './Depoimentos.module.css';
import depoimentosJson from '../../assets/depoimentos.json'
import Depoimento from '../Depoimento';

export default function Depoimentos() {
  const OrdenarJSON = (arquivo, campo) => {
    return arquivo.sort((a, b) => {
      if (a[campo] > b[campo]) { 
        return 1; 
      }
      
      if (b[campo] > a[campo]) { 
        return -1; 
      
      }
      
      return 0;
    })
  }

  OrdenarJSON(depoimentosJson, "nome");

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