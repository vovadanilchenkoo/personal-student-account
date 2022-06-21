import { Link } from 'react-router-dom';
import { parseCookie } from "../utils/coockie";

const Header = () => {
  const coockie = parseCookie(document.cookie);
  // const sessionIdCookie = coockie['sessionId'];

  return (
    <header>
      <Link to='/login'>login</Link>
      <Link to='/logout'>logout</Link>
    </header>
  );
};

export default Header;