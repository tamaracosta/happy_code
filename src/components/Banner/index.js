import React from 'react';
import styles from './Banner.module.css';

import julliFoto from './julli_foto.png';
import jackieFoto from './jackie_foto.png';

export default function Banner() {
  
  return (
     
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Jackie e Julli!
            </h1>
               
        <p className={styles.paragrafo}>
          Feliz aniversárioooooo!<br />
          Essa é uma homenagem dos alunos e equipe da Campinho!
        </p>
     
      </div>
    
      <div className={styles.imagens}>
      
        <img
          className={styles.fotoJulli}
          src={julliFoto}
          aria-hidden={true}
          alt="foto Julli"
        />
        <img
          className={styles.fotoJackie}
          src={jackieFoto}
          aria-hidden={true}
          alt="foto Jackie"
        />
      
      </div>
     </div>
    
  )
 
  
}