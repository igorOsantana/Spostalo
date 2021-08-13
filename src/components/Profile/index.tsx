import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';
import ToggleContext from '../../contexts/ToggleContext';

import { ConfigButton } from '../ConfigButton';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { toggleTheme } = useContext(ToggleContext);

  return (
    <ProfileContainer>
      <img src='https://github.com/igorOsantana.png' alt='Igor Santana' />
      <div>
        <strong>Igor Santana</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
      <ConfigButton toggleTheme={toggleTheme} />
    </ProfileContainer>
  );
}
