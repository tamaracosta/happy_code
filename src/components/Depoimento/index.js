import React from 'react';
import styles from './Depoimento.module.css';

import { FaGithub } from 'react-icons/fa';

export default function Depoimento({ foto, nomeDoAluno, depoimento, urlGithub}) {

  return (

    <div className={styles.container}>

      <img
        className={styles.imagem}
        src={foto}
        alt="foto do aluno"
      />
      <h1>{nomeDoAluno}</h1>
      <p>{depoimento}</p>
      <a target="_blank" href={urlGithub} rel="noreferrer"><FaGithub/></a>
    </div>



  )
}