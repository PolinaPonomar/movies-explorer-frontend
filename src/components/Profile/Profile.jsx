import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validator';

function Profile (props) {
    // подписка на контекст информации о юзере
    const currentUser = useContext(CurrentUserContext);
    const validation = useFormWithValidation();
    const {name, email} = validation.values;

    function handleSubmit (event) {
        event.preventDefault();
        props.onEditUserInfo({name, email});
    }

    useEffect(() => {
        if (currentUser) {
            validation.setValues({name: currentUser.name, email: currentUser.email });
        }
    }, [currentUser]);

    return (
            <section className="profile">
                <h1 className="profile__header">Привет, {currentUser.name}!</h1>
                <form className="profile__form" onSubmit={handleSubmit} noValidate>
                    <div className="profile__form-group">
                        <input
                            id="name"
                            className="profile__input profile__input_type_name"
                            name="name"
                            value={validation.values.name || ''}
                            onChange={event => validation.handleChange(event)}
                            type="text"
                            maxLength="30"
                            minLength="2"
                            required
                        />
                        <label htmlFor="name" className="profile__label profile__label_type_name">Имя</label>
                        <span id="name-error" className={`profile__input-error ${!validation.isInputsValid.name && 'profile__input-error_active'}`}>
                            {validation.errors.name}
                        </span>
                    </div>
                    <div className="profile__form-group">
                        <input
                            id="email" 
                            className="profile__input profile__input_type_email"
                            name="email"
                            value={validation.values.email || ''}
                            onChange={event => validation.handleChange(event)}
                            type="email"
                            required
                        />
                        <label htmlFor="email" className="profile__label profile__label_type_email">E-mail</label>
                        <span id="email-error"className={`profile__input-error ${!validation.isInputsValid.email && 'profile__input-error_active'}`}>
                            {validation.errors.email}
                        </span>
                    </div>
                    <p className="profile__submit-error">{props.resultMessage}</p>
                    <button type="submit" className="profile__edit-button" disabled={!validation.isFormValid}>Редактировать</button>
                </form>
                <Link to="" onClick={props.onSignOut} className="profile__log-out-link">Выйти из аккаунта</Link>
            </section>
    );
}

export default Profile;
