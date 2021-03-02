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

      <div>
        <Link href="/">
          <a>
            <img src="/logos/logo-mini-blue.svg" alt="Logo da Move it" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="/logos/logo-mini-blue.svg" alt="Logo da Move it" />
          </a>
        </Link>
      </div>

      <Link href="/">
        <a>
          <img src="/logos/logo-mini-blue.svg" alt="Logo da Move it" />
        </a>
      </Link>
    </nav>
  </div>
);

export default Sidebar;
