import { useContext } from 'react';

import { CountdownContext } from 'contexts/CountdownContext';

import * as S from './styles';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <S.Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.Container>

      {hasFinished ? (
        <S.CountdownButton>Ciclo encerrado</S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButtonActive onClick={resetCountdown}>
              Abandonar ciclo
            </S.CountdownButtonActive>
          ) : (
            <S.CountdownButton onClick={startCountdown}>
              Iniciar um ciclo
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
