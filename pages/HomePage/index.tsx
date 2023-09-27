import styles from './HomePage.module.css';
import Image from 'next/image';

function HomePage() {
  return (
    <div className={styles.centeredContainer}>
      <div className={styles.container}>
        <p>Pioneering digital</p>
        <p>solutions for those brave</p>
        <p>enough to build them</p>
        <button className={styles.connectButton}>
          CONNECT WITH US <span className={styles.arrow}>→</span>
        </button>
        <div className={styles.promoContainer}>
          <div className={styles.leftPromo}>
            <Image src="/assets/btg-promo-logo.svg" alt="Promo Logo" width={600} height={500} />
            <div className={styles.arrowTopLeft}>
              <Image src="/assets/btg-promo-arrow.svg" alt="Arrow Icon" width={120} height={120} />
            </div>
            <div className={styles.arrowBottomRight}>
              <Image src="/assets/btg-promo-arrow.svg" alt="Arrow Icon" width={120} height={120} />
            </div>
          </div>
          <div className={styles.rightPromo}>
            <div className={styles.promoTitle}>NEW TRAINING</div>
            <div className={styles.promoDescription}>
              Design Industry Fundamentals
            </div>
            <div className={styles.promoDescription}>
              If you’re ready to ditch the video tutorials on how to use the tools and are ready to learn how to operate as a designer in the real world, this cohort is for you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;






