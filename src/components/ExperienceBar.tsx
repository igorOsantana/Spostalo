import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CurrentExperience, HeaderExperienceBar } from '../styles/components/ExperienceBar.moduleCss';
// import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const porcentToNextLevel = Number(Math.round(currentExperience * 100) / experienceToNextLevel);

    return (
        <HeaderExperienceBar>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${porcentToNextLevel}%` }} />
                <CurrentExperience style={{ left: `${porcentToNextLevel}%` }}>
                    {currentExperience}
                </CurrentExperience>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </HeaderExperienceBar>
    );
}