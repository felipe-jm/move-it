import { createContext, useState } from 'react';

import challenges from '../../challenges.json';

type Challenge = {
  type: 'body' | 'eye';
  description: string;
  amount: number;
};

type ChallengesContextData = {
  level: number;
  currenteExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge | null;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
};

export const ChallengesContext = createContext<ChallengesContextData>({
  level: 0,
  currenteExperience: 0,
  experienceToNextLevel: 0,
  challengesCompleted: 0,
  activeChallenge: null,
  levelUp: () => undefined,
  startNewChallenge: () => undefined,
  resetChallenge: () => undefined
});

type ChallengesProviderProps = {
  children: React.ReactNode;
};

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currenteExperience, setCurrenteExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex] as Challenge;

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currenteExperience,
        experienceToNextLevel,
        challengesCompleted,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export { ChallengesProvider };
