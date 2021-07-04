import './Form.css';

function Form (props) {
    
    return (
        <form className="form" onSubmit={props.handleSubmit} noValidate>
            <div className="form__wrapper">
                {props.inputName && 
                    (<div className="form__group">
                        <input 
                            id="name-input"
                            className={`form__input ${!props.validation.isInputsValid.name && 'form__input_type_error'}`}
                            name="name"
                            value={props.validation.values.name || ''}
                            onChange={event => props.validation.handleChange(event)}
                            type="text"
                            maxLength="30"
                            minLength="2"
                            required
                        />
                        <label htmlFor="name-input" className="form__label">Имя</label>
                        <span id="name-input-error"className={`form__input-error ${!props.validation.isInputsValid.name && 'form__input-error_active'}`}>
                            {props.validation.errors.name}
                        </span>
                    </div>)
                }
                {props.inputEmail && 
                    (<div className="form__group">
                        <input 
                            id="email-input"
                            className={`form__input ${!props.validation.isInputsValid.email && 'form__input_type_error'}`}
                            name="email"
                            value={props.validation.values.email || ''}
                            onChange={event => props.validation.handleChange(event)}
                            type="email"
                            required
                        />
                        <label htmlFor="email-input" className="form__label">E-mail</label>
                        <span id="email-input-error" className={`form__input-error ${!props.validation.isInputsValid.email && 'form__input-error_active'}`}>
                            {props.validation.errors.email}
                        </span>
                    </div>)
                }
                {props.inputPassword && 
                    (<div className="form__group">
                        <input 
                            id="password-input"
                            className={`form__input ${!props.validation.isInputsValid.password && 'form__input_type_error'}`}
                            name="password"
                            value={props.validation.values.password || ''}
                            onChange={event => props.validation.handleChange(event)}
                            type="password"
                            required
                        />
                        <label htmlFor="password-input" className="form__label">Пароль</label>
                        <span id="password-input-error" className={`form__input-error ${!props.validation.isInputsValid.password && 'form__input-error_active'}`}>
                            {props.validation.errors.password}
                        </span>
                    </div>)
                }
            </div>
            <p className="form__submit-error">{props.errorMessage}</p>
            <button type="submit" className={`form__submit-button ${!props.validation.isFormValid && 'form__submit-button_disabled'}`} disabled={!props.validation.isFormValid}>
                {props.submitText}
            </button>
        </form>
    );
}

export default Form;
