import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
    return (
        <main className="content">
            <SearchForm/>
            <MoviesCardList/>
            <div className="more-movies">
                <button className="more-movies__button">Еще</button>
            </div>
        </main>
    );
}

export default Movies;
