import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
    const [isCardLiked,setIsCardLiked] = useState(false);

    const handleCardLike = () => {
        setIsCardLiked(true);
    };

    return (
        <article className="movie">
            <a href={props.card.link} className="movie__link" target="_blank" rel="noreferrer">
                <div className="movie__img" style={{ backgroundImage: `url(${props.card.img})` }} ></div>
            </a>
            <div className="movie__info">
                <div className="movie__wrapper">
                    <p className="movie__name">{props.card.name}</p>
                    <button className={`movie__like ${isCardLiked && 'movie__like_type_active'}`} onClick={handleCardLike}></button>
                </div>
                <p className="movie__duration">{props.card.duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;
