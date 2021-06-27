import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import { projectInternalPagesList } from '../../utils/utils';
import Navigation from '../Navigation/Navigation'

function Header (props) { 
    const location = useLocation().pathname;
    const landing = (location === "/") ? true : false;
    const loginPage = (location === "/signin") ? true : false;
    const registerPage = (location === "/signup") ? true : false;
    const accountPage = (location === "/profile") ? true : false;
    const internalPage = projectInternalPagesList.includes(location);

    return (
        <>
        { landing ?
            (   <div className="pink-wrapper">
                    <header className="header header_background_pink">
                        <Link to="/"><img className="header__logo" src={logo} alt="Логотип сайта"/></Link>
                        <Navigation
                            landing={landing}
                            loggedIn={props.loggedIn}
                            onMenuClick={props.onMenuClick}
                            isNavMenuOpen={props.isNavMenuOpen}
                            onCloseNavMenu={props.onCloseNavMenu}
                        />
                    </header>
                </div>
            ) : (
                <>
                { (loginPage || registerPage) ?
                    (   <header className="header header_page_login-goul">
                            <Link to="/"><img className="header__logo" src={logo} alt="Логотип сайта"/></Link>
                        </header>

                    ) : ( 
                        <>
                        { (internalPage || accountPage ) &&
                        (   <header className="header">
                                <Link to="/"><img className="header__logo" src={logo} alt="Логотип сайта"/></Link>
                                <Navigation
                                        landing={landing}
                                        loggedIn={props.loggedIn}
                                        onMenuClick={props.onMenuClick}
                                        isNavMenuOpen={props.isNavMenuOpen}
                                        onCloseNavMenu={props.onCloseNavMenu}
                                />
                            </header>
                        )
                        }
                        </>
                    )
                }
                </>
            )
        }
        </>
    );
}

export default Header;
