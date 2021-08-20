import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import ToggleContext from '../../contexts/ToggleContext';

import Avatar from '../../components/Avatar';
import { ConfigButton } from '../ConfigButton';

import { ProfileContainer, ProfileData } from './styles';

export function Profile() {
  const { avatar, username, level } = useContext(ChallengesContext);
  const { toggleTheme } = useContext(ToggleContext);

  const usernameSplited = username.split(' ');
  const usernameConverted =
    usernameSplited.length > 1
      ? `${usernameSplited[0]} ${usernameSplited[usernameSplited.length - 1]}`
      : usernameSplited[0];

  return (
    <ProfileContainer>
      <Avatar image={avatar} />
      <ProfileData>
        <strong>{usernameConverted}</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </ProfileData>
      <ConfigButton toggleTheme={toggleTheme} />
    </ProfileContainer>
  );
}
