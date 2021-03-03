import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';

import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Head from '../components/Head';
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

type HomeProps = {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};

const Home = ({ level, currentExperience, challengesCompleted }: HomeProps) => (
  <ChallengesProvider
    level={level}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
  >
    <Sidebar />

    <div className={styles.container}>
      <Head />

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  </ChallengesProvider>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};

export default Home;
