import { Link } from 'react-router-dom';
import './Profile.css';

function Profile () {
    return (
        <main className="content">
            <section className="profile">
                <h1 className="profile__header">Привет, Виталий!</h1>
                <form className="profile__form">
                    <div className="profile__form-group">
                        <input type="text" className="profile__input profile__input_type_name" id="name" defaultValue="Виталий"/>
                        <label htmlFor="name" className="profile__label profile__label_type_name">Имя</label>
                    </div>
                    <div className="profile__form-group">
                        <input type="email" className="profile__input profile__input_type_email" id="email" defaultValue="pochta@yandex.ru"/>
                        <label htmlFor="email" className="profile__label profile__label_type_email">E-mail</label>
                    </div>
                    <button type="submit" className="profile__edit-button">Редактировать</button>
                </form>
                <Link to="/"className="profile__log-out-link">Выйти из аккаунта</Link>
            </section>
        </main>
    );
}

export default Profile;
