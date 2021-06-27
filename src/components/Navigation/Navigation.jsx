import './Navigation.css';
import { Link } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';
import NavMenu from '../NavMenu/NavMenu';

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
                    <Link to="/profile" className="account-button">
                        <img className="account-button__icon" src={accountIcon} alt="Иконка кнопки аккаунт"/>
                        Аккаунт
                    </Link >
                    <button className="navigation__hamburger-menu" onClick={props.onMenuClick}></button>
                    <NavMenu isOpen={props.isNavMenuOpen} onClose={props.onCloseNavMenu}/>
                </nav>
                
            ) : (
                    <nav className="navigation">
                        <ul className="navigation__links">
                            <li className="navigation__links-item">
                                <Link to="/signup" className="navigation__link navigation__link_type_not-authorized">Регистрация</Link>
                            </li>
                        </ul>
                        <Link to="/signin" className="navigation__enter-link">Войти</Link>
                    </nav> 
            )
        }
        </>
    );
}

export default Navigation;