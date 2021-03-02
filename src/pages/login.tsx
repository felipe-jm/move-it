import { signIn } from 'next-auth/client';

import Head from '../components/Head';
import styles from '../styles/pages/Login.module.css';

const Login = () => (
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

        <button onClick={() => signIn()}>Entrar</button>
      </div>
    </div>
  </>
);

export default Login;
