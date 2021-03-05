import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';
import { CountdownContext } from 'contexts/CountdownContext';

import * as S from './styles';

const ChallengeBox = () => {
  const { resetChallenge, activeChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <S.Container>
      {activeChallenge ? (
        <S.ActiveChallenge>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />

            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              className="challengeSucceededButton"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </S.ActiveChallenge>
      ) : (
        <S.NotActiveChallenge>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src={`icons/level-up.svg`} alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.NotActiveChallenge>
      )}
    </S.Container>
  );
};

export default ChallengeBox;
