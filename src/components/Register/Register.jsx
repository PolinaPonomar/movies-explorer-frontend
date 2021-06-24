import { Link } from 'react-router-dom';
import './Register.css';
import Form from '../Form/Form';

function Register () {
    return (
        <main className="content">
            <section className="login-goul-page">
                <h1 className="login-goul-page__title">Добро пожаловать!</h1>
                <Form 
                    submitText={"Зарегистрироваться"}
                    inputName={true}
                    inputEmail={true}
                    inputPassword={true}
                />
                <p className="login-goul-page__text">Уже зарегистрированы?
                    <Link to="/signin"className="login-goul-page__link"> Войти</Link>
                </p>
            </section>
        </main>
    );
}

export default Register;
