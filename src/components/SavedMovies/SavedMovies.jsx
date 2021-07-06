import { useState, useEffect } from 'react';
import './SavedMovies.css';
import * as MainApi from '../../utils/MainApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    const [savedCards, setSavedCards] = useState([])

    useEffect( () => {
        MainApi.getSavedMovies()
            .then((movies) => {
                setSavedCards(movies);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <main className="content">
            <SearchForm onShowMovies={props.onShowMovies}/>
            <MoviesCardList cards={savedCards}/>
            <div className="empty-place"></div>
        </main>
    );
}

export default SavedMovies;
