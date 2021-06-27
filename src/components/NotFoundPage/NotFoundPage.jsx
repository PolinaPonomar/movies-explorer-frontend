import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <section className="error">
            <h1 className="error__header">404</h1>
            <h2 className="error__text">Страница не найдена</h2>
            <Link to="/" className="error__link">Назад</Link>
        </section>
    );
}

export default NotFoundPage;
