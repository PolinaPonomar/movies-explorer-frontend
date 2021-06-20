import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-section">
            <h2 className="section-title">О проекте</h2>
            <ul className="table table_type_info">
                <li className="table__cell">
                    <p className="table__title">Дипломный проект включал 5 этапов</p>
                    <p className="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className="table__cell">
                    <p className="table__title">На выполнение диплома ушло 5 недель</p>
                    <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <ul className="table">
                <li className="table__cell-backend">
                    <div className="table__time table__time_type_backend">1 неделя</div>
                    <p className="table__program-part">Back-end</p>
                </li>
                <li className="table__cell-frontend">
                    <div className="table__time table__time_type_frontend">4 недели</div>
                    <p className="table__program-part">Front-end</p>
                </li>
            </ul>
        </section>
    );
}

export default AboutProject;
