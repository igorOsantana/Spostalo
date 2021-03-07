import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Overlay, Container } from '../styles/components/LevelUpModal.moduleCss';
// import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <Overlay>
            <Container>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level!</p>
                <button type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </Container>
        </Overlay>
    )
}