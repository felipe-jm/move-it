import { signOut } from 'next-auth/client';
import Link from 'next/link';

import * as S from './styles';
const Sidebar = () => (
  <S.Container>
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
  </S.Container>
);

export default Sidebar;
