import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import * as S from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <S.Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className="currentExperience" style={{ left: '50%' }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.Container>
  );
};

export default ExperienceBar;
