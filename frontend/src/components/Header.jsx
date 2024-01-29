import logo from '../img/logo.svg';
import React from "react";
import { useLocation, Link } from "react-router-dom"

function Header({ email, signOut, loggedIn }) {
  const location = useLocation();
  const path = (location.pathname === "/sign-in") ? "/sign-up" : "/sign-in";
  const LinkName = (location.pathname === "/sign-in") ? "Регистрация" : "Войти";
  return (
    <header className="header">
      <img className="header__logo" src={logo} />
      {
        loggedIn
          ? (
            <div className="header__info">
              <p className="header__email">{email}</p>
              <Link
                className="header__link"
                to="/sign-in"
                onClick={signOut}>
                Выйти
              </Link>
            </div>
          )
          : (
            <Link
              className="header__link"
              to={path}>
              {LinkName}
            </Link>
          )
      }
    </header>
  );
}
export default Header;
