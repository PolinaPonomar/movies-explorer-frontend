import './Navigation.css';
import { Link } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation (props) {
    return (
        <>
        { props.loggedIn ?
            (
                <nav className="navigation">
                    <ul className="navigation__links">
                        <li className="navigation__links-item">
                            <Link to="/movies" className="navigation__link">Фильмы</Link>
                        </li>
                        <li className="navigation__links-item">
                            <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                    <Link to="/profile" className="navigation__account-link">
                        <img className="navigation__account-icon" src={accountIcon} alt="Иконка кнопки аккаунт"/>
                        Аккаунт
                    </Link >
                    <button className="navigation__hamburger-menu"></button>
                    {/* <button className="navigation__hamburger-menu navigation__hamburger-menu_invisible"></button> */}

                    <div className="navigation__menu">
                    {/* <div className="navigation__menu navigation__menu_opened"> */}
                        <div className="navigation__menu-container">
                            <button className="navigation__close-button"></button>
                            <ul className="navigation__menu-links">
                                <li className="navigation__menu-links-item">
                                    <Link to="/" className="navigation__menu-link">Главная</Link>
                                </li>
                                <li className="navigation__menu-links-item">
                                    <Link to="/movies" className="navigation__menu-link">Фильмы</Link>
                                </li>
                                <li className="navigation__menu-links-item">
                                    <Link to="/saved-movies" className="navigation__menu-link">Сохранённые фильмы</Link>
                                </li>
                            </ul>
                            <Link to="/profile" className="navigation__account-link navigation__account-link_type_menu">
                                <img className="navigation__account-icon" src={accountIcon} alt="Иконка кнопки аккаунт"/>
                                Аккаунт
                            </Link >
                        </div>
                    </div>

                </nav>
                
            ) : (
                    <nav className="navigation">
                        <ul className="navigation__links">
                            <li className="navigation__links-item">
                                <Link to="/profile" className="navigation__link navigation__link_type_not-authorized">Регистрация</Link>
                            </li>
                        </ul>
                        <Link to="/profile" className="navigation__enter-link">Войти</Link>
                    </nav> 
            )
        }
        </>
    );
}

export default Navigation;