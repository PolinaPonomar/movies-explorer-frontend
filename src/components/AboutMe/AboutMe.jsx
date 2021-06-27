import './AboutMe.css';
import photo from '../../images/personal-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-title">Студент</h2>
            <div className="info-box">
                <div className="info-box__personal-data">
                    <p className="info-box__name">Виталий</p>
                    <p className="info-box__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="info-box__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="contacts">
                        <li className="contacts__item">
                            <a href="https://www.facebook.com/" className="contacts__link" target="_blank" rel="noreferrer">Facebook</a>
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
