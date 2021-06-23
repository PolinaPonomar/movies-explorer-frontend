import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <section className="movies">
            {
                props.cards.map(item => (<MoviesCard card={item} key={item._id}/>))
            }
        </section>
    );
}

export default MoviesCardList;
