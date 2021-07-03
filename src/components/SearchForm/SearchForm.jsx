import { useRef } from 'react';
import './SearchForm.css';
import { useFormWithValidation } from '../../utils/validator';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const inputRef = useRef();
    const validation = useFormWithValidation();

    // исправить ошибку с ref и value
    function handleSubmit(event) {
        event.preventDefault();
        props.onShowMovies(inputRef.current.value);
    };

    return (
        <section className="search">
            <form className="search__form" noValidate onSubmit={handleSubmit}>
                <div className={`search__line ${!validation.isFormValid && 'search__line_type_error '}`}>
                    <input 
                        id="text-input" 
                        ref={inputRef}
                        className="search__input"
                        name="searchLine"
                        value={validation.values.searchLine}
                        onChange={event => validation.handleChange(event)}
                        type="text" 
                        placeholder="Фильм" 
                        required
                    />
                    <button type="submit" className="search__button" disabled={!validation.isFormValid}></button>
                </div>
                <span id="text-input-error" className={`search__input-error ${!validation.isFormValid && 'search__input-error_active'}`}>{validation.errors.searchLine}</span>
                <FilterCheckbox/>
            </form>
        </section>
    );
}

export default SearchForm;
