import './NavMenu.css';
import { Link } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function NavMenu (props) {
    return (
        <div className={`menu ${props.isOpen && 'menu_opened'}`}>
            <div className="menu__container">
                <button className="menu__close-button" onClick={props.onClose}></button>
                <ul className="menu__links">
                    <li className="menu__links-item">
                        <Link to="/" className="menu__link">Главная</Link>
                    </li>
                    <li className="menu__links-item">
                        <Link to="/movies" className="menu__link">Фильмы</Link>
                    </li>
                    <li className="menu__links-item">
                        <Link to="/saved-movies" className="menu__link">Сохранённые фильмы</Link>
                    </li>
                </ul>
                <Link to="/profile" className="account-button account-button_type_menu">
                    <img className="account-button__icon" src={accountIcon} alt="Иконка кнопки аккаунт"/>
                    Аккаунт
                </Link >
            </div>
        </div>
    );
}

export default NavMenu;
