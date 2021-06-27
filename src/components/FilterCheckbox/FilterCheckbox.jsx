import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter">
            <input type="checkbox" className="filter__checkbox" name="short-films" id="short-films"></input>
            <label className="filter__lable" htmlFor="short-films"></label>
            <p className="filter__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
