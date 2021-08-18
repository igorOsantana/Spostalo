import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';
import ToggleContext from '../../contexts/ToggleContext';

import { ConfigButton } from '../ConfigButton';

export function Profile() {
  const { avatar, username, level } = useContext(ChallengesContext);
  const { toggleTheme } = useContext(ToggleContext);

  const usernameSplited = username.split(' ');
  const usernameConverted = `${usernameSplited[0]} ${
    usernameSplited[usernameSplited.length - 1]
  }`;

  return (
    <ProfileContainer>
      <img src={avatar} alt='User avatar photo' />
      <div>
        <strong>{usernameConverted}</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
      <ConfigButton toggleTheme={toggleTheme} />
    </ProfileContainer>
  );
}
