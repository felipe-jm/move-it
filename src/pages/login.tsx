import { GetServerSideProps } from 'next';
import {
  getSession,
  signIn,
  providers,
  SessionProvider
} from 'next-auth/client';

import Head from 'components/Head';

import styles from 'styles/pages/Login.module.css';

type LoginProps = {
  [provider: string]: SessionProvider;
};

const Login = ({ providers }: LoginProps) => (
  <>
    <Head title="Login" />

    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src="/background.svg"
          alt="Parte da Logo da Move it (Três barras semi transparentes)"
        />
      </div>

      <div className={styles.right}>
        <img src="/logos/logo-full-white.svg" alt="Move it Logo" />

        <h1>Bem-vindo</h1>

        <main>
          <img src="/icons/github.svg" alt="Logo do Github" />

          <p>Faça login com seu Github para começar</p>
        </main>

        <button onClick={() => signIn(providers.github.id)}>Entrar</button>
      </div>
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      providers: await providers()
    }
  };
};

export default Login;
