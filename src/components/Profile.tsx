import styles from '../styles/components/Profile.module.css';

const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/felipe-jm.png" alt="Felipe Jung" />
    <div>
      <strong>Felipe Jung</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </div>
);

export default Profile;
