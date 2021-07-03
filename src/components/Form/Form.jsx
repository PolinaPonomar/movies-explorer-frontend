import './Form.css';
import { useFormWithValidation } from '../../utils/validator';

function Form (props) {

    const validation = useFormWithValidation();

    return (
        <form className="form" noValidate>
            <div className="form__wrapper">
                <div className={`form__group ${props.inputName && 'form__group_visible'}`}>
                    <input 
                        id="name-input"
                        className={`form__input ${!validation.isInputsValid.name && 'form__input_type_error'}`}
                        name="name"
                        value={validation.values.name}
                        onChange={event => validation.handleChange(event)}
                        type="text"
                        maxLength="30"
                        minLength="2"
                        required
                    />
                    <label htmlFor="name-input" className="form__label">Имя</label>
                    <span id="name-input-error"className={`form__input-error ${!validation.isInputsValid.name && 'form__input-error_active'}`}>
                        {validation.errors.name}
                    </span>
                </div>
                <div className={`form__group ${props.inputEmail && 'form__group_visible'}`}>
                    <input 
                        id="email-input"
                        className={`form__input ${!validation.isInputsValid.email && 'form__input_type_error'}`}
                        name="email"
                        value={validation.values.email}
                        onChange={event => validation.handleChange(event)}
                        type="email"
                        required
                    />
                    <label htmlFor="email-input" className="form__label">E-mail</label>
                    <span id="email-input-error" className={`form__input-error ${!validation.isInputsValid.email && 'form__input-error_active'}`}>
                        {validation.errors.email}
                    </span>
                </div>
                <div className={`form__group ${props.inputPassword && 'form__group_visible'}`}>
                    <input 
                        id="password-input"
                        className={`form__input ${!validation.isInputsValid.password && 'form__input_type_error'}`}
                        name="password"
                        value={validation.values.password}
                        onChange={event => validation.handleChange(event)}
                        type="password"
                        required
                    />
                    <label htmlFor="password-input" className="form__label">Пароль</label>
                    <span id="password-input-error" className={`form__input-error ${!validation.isInputsValid.password && 'form__input-error_active'}`}>
                        {validation.errors.password}
                    </span>
                </div>
            </div>
            <button type="submit" className={`form__submit-button ${!validation.isFormValid && 'form__submit-button_disabled'}`} disabled={!validation.isFormValid}>
                {props.submitText}
            </button>
        </form>
    );
}

export default Form;
