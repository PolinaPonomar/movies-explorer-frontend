import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const location = useLocation().pathname;
    const savedMovies = (location === "/saved-movies") ? true : false;
    const foundCards = props.searchedCards;
    const shownCards = props.shownCards;

    console.log(shownCards);
    return (
        <>
        {/* { savedMovies ?
            (
                <section className="movies" style={{ paddingBottom: "107px" }} >
                    <p className={`movies__not-found-text ${props.isCardsNotFound && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    <p className={`movies__error-text ${props.isServerError && 'movies__error-text_opened'}`}>
                        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
                        Подождите немного и попробуйте ещё раз
                    </p>
                    <div className="movies__grid">
                        { props.savedCards.map(item => (<MoviesCard card={item} key={item.id} onCardSave={props.onCardSave}/>)) }
                    </div>
                </section>
            ) : ( */}
                <section className={`movies ${props.isOpen && 'movies_opened'}`}>
                    <p className={`movies__not-found-text ${(foundCards.length === 0) && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    <p className={`movies__error-text ${props.isServerError && 'movies__error-text_opened'}`}>
                        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
                        Подождите немного и попробуйте ещё раз :(
                    </p>
                    <div className={`movies__grid ${(foundCards.length !== 0) && 'movies__grid_opened'}`}>
                        { shownCards.map(item => (<MoviesCard card={item} key={item.id} onCardSave={props.onCardSave}/>)) }
                    </div>
                    <div className={`more-movies ${(foundCards.length > shownCards.length) && 'more-movies_opened'}`}>
                        <button className="more-movies__button" onClick={props.onMoreClick}>Ещё</button>
                    </div>
                </section>
            {/* )
        } */}
        </>

    );
}

export default MoviesCardList;
