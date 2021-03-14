import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CurrentExperience, HeaderExperienceBar } from '../styles/components/ExperienceBar.moduleCss';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const porcentToNextLevel = Number(Math.round(currentExperience * 100) / experienceToNextLevel);

    return (
        <HeaderExperienceBar>
            <strong><span>0 xp</span></strong>
            <div>
                <div style={{ width: `${porcentToNextLevel}%` }} />
                <CurrentExperience style={{ left: `${porcentToNextLevel}%` }}>
                    {currentExperience}
                </CurrentExperience>
            </div>
            <strong><span>{experienceToNextLevel} xp</span></strong>
        </HeaderExperienceBar>
    );
}