import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
        <main className="content">
            <SearchForm/>
            <MoviesCardList cards={props.cards}/>
            <div className="empty-place"></div>
        </main>
    );
}

export default SavedMovies;
