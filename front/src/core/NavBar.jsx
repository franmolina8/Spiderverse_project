import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../components/Logout';
import { JwtContext } from '../context/jwtContext';
import "./Navbar.scss"
const NavBar = () => {
  const { jwt } = useContext(JwtContext);

  return (
    <div>
      <ul>
      <img src='https://1000logos.net/wp-content/uploads/2017/06/Spiderman-Logo-1994.png' alt='logo'></img>
        <li>
          <Link to='/'>HOME</Link>
        </li>

        <li>
          <Link to='/spidermans'>SPIDEVERSE</Link>
        </li>
        <li>
          <Link to='/villans'>VILLAINS</Link>
        </li>
        {jwt &&  (
          <>
            <li>
              <Link to='/caza'>CAZA</Link>
            </li>
            <Logout></Logout>{' '}
          </>
        ) }
        {jwt === null && (
          <>
            <li>
              <Link to='/logs'>LOGIN</Link>
            </li>
            <li>
              <Link to='/register'>REGISTER</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
