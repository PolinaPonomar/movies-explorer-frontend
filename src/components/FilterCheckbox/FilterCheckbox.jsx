import './FilterCheckbox.css';

function FilterCheckbox(props) {
    const handleFilterCheckboxClick = () => {
        props.onFilterCheckboxClick();
        
    }

    return (
        <div className="filter">
            <input type="checkbox" className="filter__checkbox" name="short-films" id="short-films" onClick={handleFilterCheckboxClick}></input>
            <label className="filter__lable" htmlFor="short-films"></label>
            <p className="filter__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
