import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContainer } from '../styles/components/Profile.moduleCss';
// import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <ProfileContainer>
            <img src="https://github.com/bourdog.png" alt="Igor Santana" />
            <div>
                <strong>Igor Santana</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    );
}