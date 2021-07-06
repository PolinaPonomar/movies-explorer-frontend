import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import * as MoviesApi from '../../utils/MoviesApi';
import { minutesIntoHoursConversion } from '../../utils/utils';

function MoviesCard(props) {
    const location = useLocation().pathname;
    const savedMovies = (location === "/saved-movies") ? true : false;

    const isCardSaved = props.savedCards.map(item => item.movieId).includes(props.card.id);
    // const [isCardSaved, setIsCardSaved] = useState(false);
    const [isCardUnsaved, setIsCardUnsaved] = useState(false);

    const handleCardSave = () => {
        props.onCardSave(props.card); // прописать эту функцию
    };

    const handleCardUnsave = () => {
        setIsCardUnsaved(true)
    };

    // console.log( props.savedCards.map(item => item.movieId).includes(props.card.id));
    return (
        <article className={`movie ${isCardUnsaved && 'movie_usaved'}`}>
            <a href={props.card.trailerLink} className="movie__link" target="_blank" rel="noreferrer">
                { savedMovies ?
                    (
                        <div className="movie__img" style={{ backgroundImage: `url(${props.card.image})` }} ></div>
                    ) : (
                        <div className="movie__img" style={{ backgroundImage: `url(${ MoviesApi.MOVIES_URL + props.card.image.url})` }} ></div>
                    )
                }
            </a>
            <div className="movie__info">
                <div className="movie__wrapper">
                    <p className="movie__name">{props.card.nameRU}</p>
                    { savedMovies ? 
                        ( 
                            <button className="movie__unsave" onClick={handleCardUnsave}></button>
                        ) : (
                            <button className={`movie__like ${isCardSaved && 'movie__like_type_active'}`} onClick={handleCardSave}></button>
                        )
                    }
                </div>
                <p className="movie__duration">{minutesIntoHoursConversion(props.card.duration)}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
