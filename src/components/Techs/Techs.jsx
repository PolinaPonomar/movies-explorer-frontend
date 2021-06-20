import './Techs.css';

function Techs() {
    return (
        <div className="grey-wrapper">
            <section className="techs">
                <h2 className="section-title">Технологии</h2>
                <p className="techs__title">7 технологий</p>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__table">
                    <li className="techs__table-item">HTML</li>
                    <li className="techs__table-item">CSS</li>
                    <li className="techs__table-item">JS</li>
                    <li className="techs__table-item">React</li>
                    <li className="techs__table-item">Git</li>
                    <li className="techs__table-item">Express.js</li>
                    <li className="techs__table-item">mongoDB</li>
                </ul>
            </section>
        </div>
    );
}

export default Techs;