import Image from 'next/image';
import styles from './SectionC.module.css';


export default function SectionC() {
    return (
        <div className={styles.conteneur}>
           
           <div className={styles.title}>Concours</div>
           <div className={styles.conteneurOrientation}>
           <div className={styles.Orientation}>
                 <div className={styles.OrientationImage}>
                 <Image
                    src="/img/School.webp" 
                    alt="Example Image"
                    layout="fill" 
                    objectFit="cover" 
                  />
                 </div>
                 <div className={styles.Description}>
                        <p>Orientation avant le BAC au Maroc</p>
                        <ul>
                            <li>Les filières générales </li>
                            <li>Les filières technologiques</li>
                            <li>Les filières professionnelles</li>
                            <li>Le choix des matières </li>
                            <li>Les conseils d’orientation</li>
                        </ul>
                        
                 </div>
            </div>
            <div className={styles.Orientation}>
                 <div className={styles.OrientationImage}>
                 <Image
                    src="/img/University.webp" 
                    alt="Example Image"
                    layout="fill" 
                    objectFit="cover" 
                  />
                 </div>
                 <div className={styles.Description}>
                        <p>Après le BAC au Maroc : </p>
                        <ul>
                            <li> - Universités publiques</li>
                            <li> - Grandes écoles et instituts</li>
                            <li> - Formation professionnelle</li>
                            <li> - Établissements privés</li>
                            <li> - Études à l’étranger</li>
                        </ul>
                 </div>
            </div>
            <div className={styles.Orientation}>
                 <div className={styles.OrientationImage}>
                 <Image
                    src="/img/University.webp" 
                    alt="Example Image"
                    layout="fill" 
                    objectFit="cover" 
                  />
                 </div>
                 <div className={styles.Description}>
                        <p>Après le BAC au Maroc : </p>
                        <ul>
                            <li> - Universités publiques</li>
                            <li> - Grandes écoles et instituts</li>
                            <li> - Formation professionnelle</li>
                            <li> - Établissements privés</li>
                            <li> - Études à l’étranger</li>
                        </ul>
                 </div>
            </div>
            
           </div>

        </div>

    );
  }