import './Portfolio.css';

function Portfolio() {
    return (
        <nav className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a href="https://polinaponomar.github.io/how-to-learn/" className="portfolio__link" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <div className="portfolio__link-icon"></div>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a href="https://polinaponomar.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <div className="portfolio__link-icon"></div>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a  href="https://mesto.polina.ponomareva.nomoredomains.icu/" className="portfolio__link" target="_blank" rel="noreferrer">
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <div className="portfolio__link-icon"></div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Portfolio;
