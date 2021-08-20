import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import {
  Container,
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
} from './styles';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton disabled>Ciclo encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonActive onClick={resetCountdown}>
              Abandonar ciclo
            </CountdownButtonActive>
          ) : (
            <CountdownButton onClick={startCountdown}>
              Iniciar ciclo
            </CountdownButton>
          )}
        </>
      )}
    </Container>
  );
}
