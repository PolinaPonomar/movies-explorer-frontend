import { useRef } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const inputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        props.onShowMovies(inputRef.current.value);
    };

    return (
        <section className="search">
            <form className="search__form" noValidate onSubmit={handleSubmit}>
                <div className="search__line">
                    <input id="text-input" ref={inputRef} type="text" className="search__input" placeholder="Фильм" required/>
                    <button type="submit" className="search__button"></button>
                </div>
                <span id="text-input-error" className="search__input-error">Нужно ввести ключевое слово</span>
                <FilterCheckbox/>
            </form>
        </section>
    );
}

export default SearchForm;
