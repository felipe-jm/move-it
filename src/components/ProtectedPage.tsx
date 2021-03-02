import { useSession } from 'next-auth/client';
import Router from 'next/router';

const ProtectedPage: React.FC = ({ children }) => {
  const [session] = useSession();

  if (!session) Router.push('/login');

  return <div>{children}</div>;
};

export default ProtectedPage;
