import { signOut } from 'next-auth/client';
import Link from 'next/link';

import styles from '../styles/components/Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.container}>
    <nav>
      <Link href="/">
        <a>
          <img src="/logos/logo-mini-blue.svg" alt="Logo da Move it" />
        </a>
      </Link>

      <div onClick={() => signOut()}>
        <span id="text-red">Sair</span>
      </div>
    </nav>
  </div>
);

export default Sidebar;
