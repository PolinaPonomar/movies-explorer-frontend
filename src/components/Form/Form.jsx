import './Form.css';

function Form (props) {
    return (
        <form className="form" noValidate>
            <div className="form__wrapper">
                <div className={`form__group ${props.inputName && 'form__group_visible'}`}>
                    <input id="name-input" type="text" className="form__input" defaultValue="Виталий" minLength="2" maxLength="30" required/>
                    <label htmlFor="name" className="form__label">Имя</label>
                    <span id="name-input-error"className="form__input-error">Что-то пошло не так...</span>
                </div>
                <div className={`form__group ${props.inputEmail && 'form__group_visible'}`}>
                    <input id="email-input" type="email" className="form__input" id="email" defaultValue="pochta@yandex.ru" required/>
                    <label htmlFor="email" className="form__label">E-mail</label>
                    <span id="email-input-error" className="form__input-error">Что-то пошло не так...</span>
                </div>
                <div className={`form__group ${props.inputPassword && 'form__group_visible'}`}>
                    <input id="password-input" type="password" className="form__input form__input_type_error" id="email" defaultValue="12345" required/>
                    <label htmlFor="email" className="form__label">Пароль</label>
                    <span id="password-input-error" className="form__input-error form__input-error_active">Что-то пошло не так...</span>
                </div>
            </div>
            <button type="submit" className="form__submit-button">{props.submitText}</button>
        </form>
    );
}

export default Form;
