import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    // валидация поисковой строки вынесена сюда для того, чтобы показывать ошибки после сабмита формы
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    function handleChange(event) {
        setSearchText(event.target.value);
        setError('Нужно ввести ключевое слово');
        setIsFormValid(event.target.closest("form").checkValidity());
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (isFormValid) {
            props.onShowMovies(searchText);
        } else {
            // показываем ошибку после сабмита формы
            setError('Нужно ввести ключевое слово');
        }
    };

    return (
        <section className="search">
            <form className="search__form" noValidate onSubmit={handleSubmit}>
                <div className={`search__line ${!isFormValid && 'search__line_type_error'}`}>
                    <input 
                        id="text-input"
                        className="search__input"
                        value={searchText}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Фильм" 
                        required
                    />
                    <button type="submit" className="search__button"></button>
                </div>
                <span id="text-input-error" className={`search__input-error ${!isFormValid && 'search__input-error_active'}`}>{error}</span>
                <FilterCheckbox/>
            </form>
        </section>
    );
}

export default SearchForm;
