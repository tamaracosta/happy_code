import React from 'react';
import TextTransition from 'react-text-transition';
import styles from './Footer.module.css';
import depoimentosJson from '../../assets/depoimentos.json'
import { FaHeart } from 'react-icons/fa';

let NOMES = [];

export default function Footer() {

    for(let i = 0; i < depoimentosJson.length; i++) {
        NOMES.push(depoimentosJson[i].nome)
    }
    
    function shuffleArray(arr) {
        // Loop em todos os elementos
        for (let i = arr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // Retornando array com aleatoriedade
        return arr;
    }

    NOMES = shuffleArray(NOMES);
    
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return(
        <div className={styles.footer}>
            <p className={styles.text}>
                Feito com <FaHeart style={{color: 'red'}}/> por
                <div className={styles.textoAnimado}>
                    <TextTransition >{NOMES[index % NOMES.length]}</TextTransition>
                </div>
            </p>            
        </div>
    )
}