import { Link } from 'react-router-dom';
import './Register.css';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/validator';

function Register (props) {
    const validation = useFormWithValidation();
    const {name, email, password} = validation.values;

    function handleSubmit (event) {
        event.preventDefault();
        props.onRegister({name, email, password});
    }

    return (
        <section className="login-goul-page">
            <h1 className="login-goul-page__title">Добро пожаловать!</h1>
            <Form 
                submitText={"Зарегистрироваться"}
                inputName={true}
                inputEmail={true}
                inputPassword={true}
                handleSubmit={handleSubmit}
                validation={validation}
                errorMessage={props.errorRegistrationMessage}
            />
            <p className="login-goul-page__text">Уже зарегистрированы?
                <Link to="/signin"className="login-goul-page__link"> Войти</Link>
            </p>
        </section>
    );
}

export default Register;
