import { Link } from 'react-router-dom';
import './Login.css';
import Form from '../Form/Form';
import { useFormWithValidation } from '../../utils/validator';

function Login (props) {
    const validation = useFormWithValidation();
    const {email, password} = validation.values;

    function handleSubmit (event) {
        event.preventDefault();
        props.onLogin({email, password});
    }

    return (
        <section className="login-goul-page">
            <h1 className="login-goul-page__title">Рады видеть!</h1>
            <Form 
                submitText={"Войти"}
                inputName={false}
                inputEmail={true}
                inputPassword={true}
                handleSubmit={handleSubmit}
                validation={validation}
                errorMessage={props.errorMessage}
            />
            <p className="login-goul-page__text">Ещё не зарегистрированы?
                <Link to="/signup"className="login-goul-page__link"> Регистрация</Link>
            </p>
        </section>
    );
}

export default Login;
