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
                    { props.cards.map(item => (<MoviesCard card={item} key={item._id}/>)) }
                </section>
            ) : (
                <section className="movies">
                    { props.cards.map(item => (<MoviesCard card={item} key={item._id}/>)) }
                </section>
            )
        }
        </>
    );
}

export default MoviesCardList;
