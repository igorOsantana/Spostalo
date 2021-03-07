import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
// import styles from '../styles/components/Countdown.module.css';
import { CountdownButton, CountdownButtonActive, CountdownContainer } from '../styles/components/Countdown.moduleCss';

export function Countdown() {
    const { minutes,
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

            { hasFinished ? (
                <CountdownButton
                    disabled
                >
                    Ciclo encerrado
                </CountdownButton>
            ) : (
                <>
                    {isActive ? (
                        <CountdownButtonActive
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </CountdownButtonActive>
                    ) : <CountdownButton
                        onClick={startCountdown}
                    >
                        Iniciar ciclo
                        </CountdownButton>
                    }
                </>
            )}
        </div >
    );
}