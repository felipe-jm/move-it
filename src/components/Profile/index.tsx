import { useSession } from 'next-auth/client';

import { useContext } from 'react';

import { ChallengesContext } from 'contexts/ChallengesContext';

import * as S from './styles';
const Profile = () => {
  const [session] = useSession();

  const { level } = useContext(ChallengesContext);

  if (!session) return null;

  return (
    <S.Container>
      <img src={session.user.image} alt={session.user.name} />
      <div>
        <strong>{session.user.name} </strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </S.Container>
  );
};

export default Profile;
