import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form" noValidate>
                <div className="search__line">
                    <input id="text-input" type="text" className="search__input" placeholder="Фильм" required/>
                    <button type="submit" className="search__button"></button>
                </div>
                <span id="text-input-error" className="search__input-error">Нужно ввести ключевое слово</span>
                <FilterCheckbox/>
            </form>
        </section>
    );
}

export default SearchForm;
