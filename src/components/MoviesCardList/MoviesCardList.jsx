import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const location = useLocation().pathname;
    const savedMovies = (location === "/saved-movies") ? true : false;
    return (
        <>
        { savedMovies ?
            (
                <section className="movies" style={{ paddingBottom: "107px" }} >
                    <p className={`movies__not-found-text ${props.isCardsNotFound && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    { props.cards.map(item => (<MoviesCard card={item} key={item.id}/>)) }
                </section>
            ) : (
                <section className={`movies ${props.isOpen && 'movies_opened'}`}>
                    <p className={`movies__not-found-text ${props.isCardsNotFound && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    { props.cards.map(item => (<MoviesCard card={item} key={item.id}/>)) }
                </section>
            )
        }
        </>
    );
}

export default MoviesCardList;
