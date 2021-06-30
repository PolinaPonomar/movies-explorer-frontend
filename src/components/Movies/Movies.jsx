import { useState, useEffect } from 'react';
import './Movies.css';
import * as MoviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    const pageWidth = window.innerWidth;
    const [cards, setCards] = useState([]);
    const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
    const [isMoviesCardListOpen, setIsMoviesCardListOpen] = useState(false);
    const [isCardsNotFound, setIsCardsNotFound] = useState(false);

    // useEffect( () => {
        
    // }, [] )

    const handleShowMovies = (inputText) => {
        setIsPreloaderOpen(true);
        setIsMoviesCardListOpen(false);
        setIsCardsNotFound(false);
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
                duration: item.duration,
              })
            });
            setCards(resultCards);
            setIsPreloaderOpen(false);
            setIsMoviesCardListOpen(true);
            if (resultCards.length === 0) {
                setIsCardsNotFound(true)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return (
        <main className="content">
            <SearchForm onShowMovies={handleShowMovies}/>
            <Preloader isOpen={isPreloaderOpen}/>
            <MoviesCardList cards={cards} isOpen={isMoviesCardListOpen} isCardsNotFound={isCardsNotFound}/>
            <div className={`more-movies ${props.isOpen && 'more-movies_opened'}`}>
                <button className="more-movies__button">Ещё</button>
            </div>
        </main>
    );
}

export default Movies;
