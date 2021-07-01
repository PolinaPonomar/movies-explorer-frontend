import { useState, useEffect } from 'react';
import './Movies.css';
import * as MoviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { minutesIntoHoursConversion } from '../../utils/utils';

function Movies(props) {
    const [cards, setCards] = useState([]);
    const [isMoviesCardListOpen, setIsMoviesCardListOpen] = useState(false);
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
    const [isCardsFound, setIsCardsFound] = useState(false);
    const [isCardsNotFound, setIsCardsNotFound] = useState(false);
    const [isServerError, setIsServerError] = useState(false);

    const handleShowMovies = (inputText) => {

        setIsPreloaderOpen(true);
        setIsMoviesCardListOpen(false);
        setIsCardsFound(false);
        setIsCardsNotFound(false);
        setIsServerError(false);

        MoviesApi.getMovies()
          .then((allCards) => {
            const matchingCards = allCards.filter(item => 
                (item.nameRU !== null && item.nameRU.toLowerCase().includes(inputText.toLowerCase())) ||
                (item.nameEN !== null && item.nameEN.toLowerCase().includes(inputText.toLowerCase()))
            );
            const resultCards = [];
            matchingCards.forEach(item => {
                resultCards.push({
                id: item.id,
                name: item.nameRU,
                link: item.trailerLink,
                img: MoviesApi.MOVIES_URL + item.image.url,
                duration: minutesIntoHoursConversion(item.duration),
              })
            });
            setCards(resultCards);
            setIsPreloaderOpen(false);
            setIsMoviesCardListOpen(true);
            setIsCardsFound(true);
            if (resultCards.length === 0) {
                setIsCardsNotFound(true)
                setIsCardsFound(false);
            }
          })
          .catch((err) => {
            setIsPreloaderOpen(false);
            setIsMoviesCardListOpen(true);
            setIsServerError(true);
            console.log(err);
          });
      }

    return (
        <main className="content">
            <SearchForm onShowMovies={handleShowMovies}/>
            <Preloader isOpen={isPreloaderOpen}/>
            <MoviesCardList
              isOpen={isMoviesCardListOpen}
              cards={cards}
              isCardsFound={isCardsFound}
              isCardsNotFound={isCardsNotFound}
              isServerError={isServerError}
            />
        </main>
    );
}

export default Movies;
