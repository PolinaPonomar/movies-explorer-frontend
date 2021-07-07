import { useContext } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies(props) {
    // подписка на контекст информации о юзере
    const currentUser = useContext(CurrentUserContext);
    const cardsSavedCurrentUser = props.savedCards.filter(item => item.owner._id === currentUser._id);
    const searchedCardsSavedCurrentUser = props.searchedSavedCards.filter(item => item.owner._id === currentUser._id);

    return (
        <main className="content">
            <SearchForm 
                onShowMovies={props.onShowMovies} 
                isCheckboxActive={props.isCheckboxActive}
                setIsCheckboxActive={props.setIsCheckboxActive}
                // onFilterCheckboxClick={props.onFilterCheckboxClick}
            />
            <MoviesCardList 
                savedCards={cardsSavedCurrentUser}
                onCardUnsave={props.onCardUnsave}
                searchedSavedCards={searchedCardsSavedCurrentUser}
                isSearchButtonPressed={props.isSearchButtonPressed}
            />
            <div className="empty-place"></div>
        </main>
    );
}

export default SavedMovies;
