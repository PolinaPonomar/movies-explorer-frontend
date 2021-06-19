import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation'

function Header (props) {
    const location = useLocation().pathname;
    const landing = (location === "/") ? true : false;
    return (
        <>
        { landing ?
            (   <div className="header-wrapper">
                    <header className="header header_background_pink">
                        <Link to="/"><img className="header__logo" src={logo} alt="Логотип сайта"/></Link>
                        <Navigation landing={landing} loggedIn={props.loggedIn}/>
                    </header>
                </div>
            ) : (
                <header className="header">
                    <Link to="/"><img className="header__logo" src={logo} alt="Логотип сайта"/></Link>
                    <Navigation landing={landing} loggedIn={props.loggedIn}/>
                </header>
            )
        }
        </>
    );
}

export default Header;
