import './Footer.css';

function Footer () {
    return (
        <div className="footer">
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
        </div>
    );
}

export default Footer;
