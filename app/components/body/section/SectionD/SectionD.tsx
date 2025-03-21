import Image from 'next/image';
import styles from './SectionD.module.css';


export default function SectionD() {
    return (
        <div className={styles.conteneur}>
           
           <div className={styles.title}>Contactez nous sur <span>Whatsapp</span></div>
           
           
           <div className={styles.OrientationImage}>
                 <Image
                    src="/img/Whatsapp.webp" 
                    alt="Example Image"
                    layout="fill" 
                    objectFit="cover" 
                  />
            </div>
      
        </div>

    );
  }