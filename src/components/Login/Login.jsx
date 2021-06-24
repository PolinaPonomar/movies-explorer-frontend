import { Link } from 'react-router-dom';
import './Login.css';
import Form from '../Form/Form';

function Login () {
    return (
        <main className="content">
            <section className="login-goul-page">
                <h1 className="login-goul-page__title">Рады видеть!</h1>
                <Form 
                    submitText={"Войти"}
                    inputName={false}
                    inputEmail={true}
                    inputPassword={true}
                />
                <p className="login-goul-page__text">Ещё не зарегистрированы?
                    <Link to="/signup"className="login-goul-page__link"> Регистрация</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
