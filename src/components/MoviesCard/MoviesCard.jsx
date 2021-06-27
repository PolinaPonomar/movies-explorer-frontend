import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation().pathname;
    const savedMovies = (location === "/saved-movies") ? true : false;

    const [isCardLiked, setIsCardLiked] = useState(false);
    const [isCardUnsaved, setIsCardUnsaved] = useState(false);

    const handleCardLike = () => {
        setIsCardLiked(true);
    };

    const handleCardUnsave = () => {
        setIsCardUnsaved(true)
    };

    return (
        <article className={`movie ${isCardUnsaved && 'movie_usaved'}`}>
            <a href={props.card.link} className="movie__link" target="_blank" rel="noreferrer">
                <div className="movie__img" style={{ backgroundImage: `url(${props.card.img})` }} ></div>
            </a>
            <div className="movie__info">
                <div className="movie__wrapper">
                    <p className="movie__name">{props.card.name}</p>
                    { savedMovies ? 
                        ( 
                            <button className="movie__unsave" onClick={handleCardUnsave}></button>
                        ) : (
                            <button className={`movie__like ${isCardLiked && 'movie__like_type_active'}`} onClick={handleCardLike}></button>
                        )
                    }
                </div>
                <p className="movie__duration">{props.card.duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
