import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [redirectToHomePage, setRedirectToHomePage] = useState(false);

  const login = () => {
    setTimeout(() => {
      document.cookie = 'sessionId=someSessionId';
      setRedirectToHomePage(true);
    }, 500);
  };

  return (
    <div className='login'>
      <input type='text' placeholder='Login' />
      <input type='text' placeholder='Password' />
      <button type="button" onClick={login}>Login</button>
      {
        redirectToHomePage ? <Navigate to='/home' /> : ''
      }
    </div>
  );
};

export default Login;