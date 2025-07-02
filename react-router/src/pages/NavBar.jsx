import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Landing Page</Link>
        </li>
        <li>
          {/* <Link to="/about">About Page</Link> */}
          <Link to='/about'>About Page</Link>
          </li>
        <li>
          <Link to="/home">Home Page</Link>
          </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;