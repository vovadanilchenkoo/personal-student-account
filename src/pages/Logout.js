import { Navigate } from 'react-router-dom';
import { parseCookie } from '../utils/coockie';

const Logout = () => {
  const cookies = parseCookie(document.cookie);
  const {sessionId, ...otherCookies} = cookies;
  document.cookie = otherCookies;

  return (
    <Navigate to='login' />
  );
};

export default Logout;