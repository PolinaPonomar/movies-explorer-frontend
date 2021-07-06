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
                <section className="movies movies_opened" style={{ paddingBottom: "107px" }} >
                    <p className={`movies__not-found-text`}>Ничего не найдено</p>
                    <div className="movies__grid movies__grid_opened">
                        { props.isSearchButtonPressed ?
                            (props.searchedSavedCards.map(item => 
                                (<MoviesCard 
                                    card={item} 
                                    key={item.movieId} 
                                    savedCards={props.savedCards}
                                    onCardUnsave={props.onCardUnsave}
                                />))
                            ) : (
                                props.savedCards.map(item => 
                                    (<MoviesCard 
                                        card={item} 
                                        key={item.movieId} 
                                        savedCards={props.savedCards}
                                        onCardUnsave={props.onCardUnsave}
                                    />))
                            )
                        }
                    </div>
                </section>
            ) : (
                <section className={`movies ${props.isOpen && 'movies_opened'}`}>
                    <p className={`movies__not-found-text ${(props.searchedCards.length === 0) && 'movies__not-found-text_opened'}`}>Ничего не найдено</p>
                    <p className={`movies__error-text ${props.isServerError && 'movies__error-text_opened'}`}>
                        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
                        Подождите немного и попробуйте ещё раз :(
                    </p>
                    <div className={`movies__grid ${(props.searchedCards.length !== 0) && 'movies__grid_opened'}`}>
                        { props.shownCards.map(item => 
                            (<MoviesCard 
                                card={item} 
                                key={item.id} 
                                onCardSave={props.onCardSave} 
                                isCardSaved={props.isCardSaved}
                                savedCards={props.savedCards}
                            />)) 
                        }
                    </div>
                    <div className={`more-movies ${(props.searchedCards.length > props.shownCards.length) && 'more-movies_opened'}`}>
                        <button className="more-movies__button" onClick={props.onMoreClick}>Ещё</button>
                    </div>
                </section>
            )
        }
        </>

    );
}

export default MoviesCardList;
