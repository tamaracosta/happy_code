import React from 'react';
import styles from './Depoimento.module.css';

export default function Depoimento({ foto, nomeDoAluno, depoimento }) {

  return (

    <div className={styles.container}>

      <img
        className={styles.imagem}
        src={foto}
        alt="foto do aluno"
      />
      <h1>{nomeDoAluno}</h1>
      <p>{depoimento}</p>

    </div>



  )
}