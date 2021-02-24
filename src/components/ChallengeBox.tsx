import { useState } from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const [hasActiveChallenge, setHasActiveChallenge] = useState(true);

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" />

            <strong>Novo desafio</strong>
            <p>Levante e faça um caminhada</p>
          </main>

          <footer>
            <button className={styles.challengeFailedButton}>Falhei</button>
            <button className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Fianlize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
