import './FilterCheckbox.css';

function FilterCheckbox(props) {
    const handleFilterCheckboxClick = () => {
        props.setIsCheckboxActive(!props.isCheckboxActive);
        // props.onFilterCheckboxClick();
        // props.onShowMovies(props.searchText);
    }

    // console.log(props.searchText);

    return (
        <div className="filter">
            <input type="checkbox" className="filter__checkbox" name="short-films" id="short-films" onClick={handleFilterCheckboxClick}></input>
            <label className="filter__lable" htmlFor="short-films"></label>
            <p className="filter__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
