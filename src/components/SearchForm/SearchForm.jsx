import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <div className="search__line">
                    <input type="text" className="search__input" placeholder="Фильм"></input>
                    <button className="search__button"></button>
                </div>
                <FilterCheckbox/>
            </form>
        </section>
    );
}

export default SearchForm;
