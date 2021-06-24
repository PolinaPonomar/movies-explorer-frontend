import { useLocation } from 'react-router-dom';
import './Footer.css';
import { projectInternalPagesList } from '../../utils/utils';

function Footer () {
    const location = useLocation().pathname;
    const landing = (location === "/") ? true : false;
    const internalPage = projectInternalPagesList.includes(location);

    return (
        <footer className={`footer ${(!internalPage && !landing) && 'footer_invisible'}`}>
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <nav className="footer__contacts">
                <p className="footer__year">&copy; 2021</p>
                    <ul className="contacts contacts_type_footer">
                        <li className="contacts__item contacts__item_type_footer">
                            <a 
                                href="https://praktikum.yandex.ru/" 
                                className="contacts__link contacts__link_type_footer" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className="contacts__item contacts__item_type_footer">
                            <a 
                                href="https://github.com/PolinaPonomar" 
                                className="contacts__link contacts__link_type_footer" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li className="contacts__item contacts__item_type_footer">
                            <a 
                                href="https://www.facebook.com/" 
                                className="contacts__link contacts__link_type_footer" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
            </nav>
        </footer>
    );
}

export default Footer;
