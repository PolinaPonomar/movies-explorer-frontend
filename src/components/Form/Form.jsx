import './Form.css';

function Form (props) {
    return (
        <form className="form">
            <div className="form__wrapper">
                <div className={`form__group ${props.inputName && 'form__group_visible'}`}>
                    <input type="text" className="form__input" id="name" defaultValue="Виталий"/>
                    <label htmlFor="name" className="form__label">Имя</label>
                </div>
                <div className={`form__group ${props.inputEmail && 'form__group_visible'}`}>
                    <input type="email" className="form__input" id="email" defaultValue="pochta@yandex.ru"/>
                    <label htmlFor="email" className="form__label">E-mail</label>
                </div>
                <div className={`form__group ${props.inputPassword && 'form__group_visible'}`}>
                    <input type="password" className="form__input" id="email" defaultValue="12345"/>
                    <label htmlFor="email" className="form__label">Пароль</label>
                </div>
            </div>
            <button type="submit" className="form__submit-button">{props.submitText}</button>
        </form>
    );
}

export default Form;
