import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';

function Movies(props) {
    return (
        <main className="content">
            <SearchForm/>
            {/* <Preloader/> */}
            <MoviesCardList cards={props.cards}/>
            <div className="more-movies">
                <button className="more-movies__button">Ещё</button>
            </div>
        </main>
    );
}

export default Movies;
