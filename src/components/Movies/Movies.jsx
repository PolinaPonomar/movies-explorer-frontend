import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
    return (
        <main className="content">
            <SearchForm/>
            <MoviesCardList cards={props.cards}/>
            <div className="more-movies">
                <button className="more-movies__button">Еще</button>
            </div>
        </main>
    );
}

export default Movies;
