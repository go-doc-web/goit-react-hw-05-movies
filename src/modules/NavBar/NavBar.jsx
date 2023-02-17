import itemsNavBar from './itemsNavBar';

import { NavLink } from 'react-router-dom';

import css from './navbar.module.css';

const NavBar = () => {
  const elements = itemsNavBar.map(({ id, text, link }) => (
    <li className={css.menu_item} key={id}>
      <NavLink className={css.menu_link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <nav className={css.menu}>
      <ul className={css.menu_list}>{elements}</ul>
    </nav>
  );
};
export default NavBar;
