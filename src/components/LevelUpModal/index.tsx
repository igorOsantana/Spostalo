import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Overlay, Container } from './styles';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <Overlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>
        <button type='button' onClick={closeLevelUpModal}>
          <IoIosCloseCircleOutline />
        </button>
      </Container>
    </Overlay>
  );
}
