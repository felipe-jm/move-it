import { useSession } from 'next-auth/client';

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  const [session] = useSession();

  const { level } = useContext(ChallengesContext);

  if (!session) return null;

  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt={session.user.name} />
      <div>
        <strong>{session.user.name} </strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
