import { parseCookie } from '../../utils/coockie';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const cookie = parseCookie(document.cookie);
  const sessionId = cookie.sessionId;
  
  return (
    sessionId 
      ? <Component /> 
      : <Navigate to='/login' />
  );
};

export default ProtectedRoute;