import './AboutMe.css';
import photo from '../../images/personal-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-title">Студент</h2>
            <div className="info-box">
                <div className="info-box__personal-data">
                    <p className="info-box__name">Полина</p>
                    <p className="info-box__profession">Фронтенд-разработчик, 25 лет</p>
                    <p className="info-box__about">Живу в Москве, закончила физико-технический факультет НИЯУ МИФИ. 
                    На последних курсах обучения программировала на Python, последний год занимаюсь фронтенд-разработкой на JS, React. 
                    Есть опыт серверной разработки на Node.js. Ранее работала репетитором по математике, 
                    сейчас нахожусь в поиске работы в области веба. Команда мечты, найдись! 😊</p>
                    <ul className="contacts">
                        <li className="contacts__item">
                            <a href="https://t.me/polina_ponomareva1" className="contacts__link" target="_blank" rel="noreferrer">Telegram</a>
                        </li>
                        <li className="contacts__item">
                            <a href="https://github.com/PolinaPonomar" className="contacts__link" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="info-box__image" src={photo} alt="Фотография разработчика"/>
            </div>
            <Portfolio/>
        </section>
    );
}

export default AboutMe;
