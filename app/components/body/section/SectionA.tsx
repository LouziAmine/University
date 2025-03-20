import Image from 'next/image';
import styles from './SectionA.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SectionA() {
    return (
        <div className={styles.conteneur}>
            <div className={styles.a}>
                <Image
                src="/img/Img1.webp" 
                alt="Example Image"
                fill 
                style={{ objectFit: 'cover' }} 
                   />
            </div>
            <div className={styles.b}>

                <form className={styles.form}>
                    <div className={styles.conteneurForm}>
                    <label htmlFor="TrouverVotreCours"  
                    className={styles.labelTrouverVotreCours}
                    >Trouver votre cours :</label>
                   

                        <div className={styles.Soumettre}> 
                            <input
                                type="text"
                                id="TrouverVotreCours"
                                className={styles.input}
                            />

                               
                                <button type="submit"  
                                className={styles.btnSoumettre}
                                >
                                        <FontAwesomeIcon 
                                        icon={faSearch} 
                                        className={styles.svg}
                                        
                                        /> 
                                </button>
                        </div>
                    </div>
                    
                    
                </form>
 

             
                <div className={styles.ListElementConteneur}>
                   <div className={styles.ListElement}>Primaire</div>
                   <div className={styles.ListElement}>Collège</div>
                   <div className={styles.ListElement}>Lycée</div>
                   <div className={styles.ListElement}>Classes Préparatoires</div>
                   <div className={styles.ListElement}>Concours</div>
                   <div className={styles.ListElement}>Orientation</div>
                </div>


                
            </div>
      </div>

    );
  }