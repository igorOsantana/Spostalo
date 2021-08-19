import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';
import { database } from '../services/firebase';

import { LevelUpModal } from '../components/LevelUpModal';

type Challenge = {
  type: 'body' | 'eye';
  description: string;
  amount: number;
};

type GameProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

type ChallengesContextData = {
  username: string;
  avatar: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
};

type ChallengesProviderProps = {
  children: ReactNode;
  userID: string;
  username: string;
  avatar: string;
  game: GameProps;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...props
}: ChallengesProviderProps) {
  const [username, setUsername] = useState(
    props.username ? props.username : 'Usuário desconhecido'
  );
  const [avatar, setAvatar] = useState(
    props.avatar ? props.avatar : '/icons/avatar-icon.png'
  );
  const [level, setLevel] = useState(props.game.level ? props.game.level : 0);
  const [currentExperience, setCurrentExperience] = useState(
    props.game.currentExperience ? props.game.currentExperience : 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    props.game.challengesCompleted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 5, 2);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`,
      });
    }
  };

  const resetChallenge = () => setActiveChallenge(null);

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  };

  const closeLevelUpModal = () => setIsLevelUpModalOpen(false);

  const levelUp = () => {
    setLevel(prevState => prevState + 1);
    setIsLevelUpModalOpen(true);
  };

  const updateUserGameData = async (game: GameProps) => {
    await database.ref().child('users').child(props.userID).update({
      level: game.level,
      currentExperience: game.currentExperience,
      challengesCompleted: game.challengesCompleted,
    });
  };

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    updateUserGameData({ level, currentExperience, challengesCompleted });
  }, [level, currentExperience, challengesCompleted]);

  return (
    <ChallengesContext.Provider
      value={{
        username,
        avatar,
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
