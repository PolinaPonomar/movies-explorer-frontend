import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { defineShownCardsParameters } from '../../utils/utils';

function MoviesCardList(props) {
    const location = useLocation().pathname;
    const savedMovies = (location === "/saved-movies") ? true : false;
    const allCards = props.cards;
    const [numberOfInitialCards, setNumberOfInitialCards] = useState(0);
    const [maxNumberOfAddedCards, setMaxNumberOfAddedCards] = useState(0);
    const [shownCards, setShownCards] = useState([]);

    const setShownCardsParameters = () => {
        const pageWidth = window.innerWidth;
        const shownCardsParameters = defineShownCardsParameters(pageWidth);
        setNumberOfInitialCards(shownCardsParameters.numOfInitialCards);
        setMaxNumberOfAddedCards(shownCardsParameters.maxNumOfAddedCards);
    }
   
    // при монтировании компонента определить характеристики того, как карточки будут отображаться на странице
    useEffect( () => {
        setShownCardsParameters();
    }, []);

    // учесть изменение ширины экрана (переворот телефона)
    window.addEventListener('resize', () => {
        setTimeout(setShownCardsParameters, 3000);
    });

    // при каждом запросе, в результате которого нашлись карточки, задать начальный массив отображаемых карточек 
    useEffect( () => {
        setShownCards(allCards.slice(0, numberOfInitialCards));
    },[props.isCardsFound]);

    const handleMoreClick = () => {
        setShownCards(allCards.slice(0, shownCards.length + maxNumberOfAddedCards));
    };

    return (
        <>
        { savedMovies ?
            (
                <section className="movies" style={{ paddingBottom: "107px" }} >
                    <p className={`movies__not-found-text ${props.isCardsNotFound && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    <p className={`movies__error-text ${props.isServerError && 'movies__error-text_opened'}`}>
                        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
                        Подождите немного и попробуйте ещё раз
                    </p>
                    <div className="movies__grid">
                        { allCards.map(item => (<MoviesCard card={item} key={item.id}/>)) }
                    </div>
                </section>
            ) : (
                <section className={`movies ${props.isOpen && 'movies_opened'}`}>
                    <p className={`movies__not-found-text ${props.isCardsNotFound && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    <p className={`movies__error-text ${props.isServerError && 'movies__error-text_opened'}`}>
                        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
                        Подождите немного и попробуйте ещё раз :(
                    </p>
                    <div className={`movies__grid ${props.isCardsFound && 'movies__grid_opened'}`}>
                        { shownCards.map(item => (<MoviesCard card={item} key={item.id}/>)) }
                    </div>
                    <div className={`more-movies ${(allCards.length > shownCards.length) && 'more-movies_opened'}`}>
                        <button className="more-movies__button" onClick={handleMoreClick}>Ещё</button>
                    </div>
                </section>
            )
        }
        </>

    );
}

export default MoviesCardList;
