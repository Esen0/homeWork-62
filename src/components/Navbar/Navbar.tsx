import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;