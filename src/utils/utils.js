const projectInternalPagesList = ["/movies", "/saved-movies"];
const DURATION_SHORT_MOVIES = 40;
const NUM_OF_INITIAL_CARDS_PAGE_WIDTH_1280 = 12;
const NUM_OF_INITIAL_CARDS_PAGE_WIDTH_768 = 8;
const NUM_OF_INITIAL_CARDS_PAGE_WIDTH_480 = 5;
const NUM_OF_ADDED_CARDS_PAGE_WIDTH_1280 = 3;
const NUM_OF_ADDED_CARDS_PAGE_WIDTH_768 = 2;
const NUM_OF_ADDED_CARDS_PAGE_WIDTH_480 = 1;

const minutesIntoHoursConversion = (minutes) => {
    if (Number(minutes) >= 60) {
      if (Number(minutes)%60 === 0) {
        return String(Math.trunc(Number(minutes)/60)) + 'ч';
      }
      return String(Math.trunc(Number(minutes)/60)) + 'ч '+ String(Number(minutes)%60) + 'м';
    } 
    return minutes + 'м';
};

const filterCards = (movies, searchText, isCheckboxActive) => {
  if (isCheckboxActive) {
    const filteredByCheckboxMovies = filterCardsByCheckbox(movies);
    return filterCardsByText(filteredByCheckboxMovies, searchText)
  } else {
    return filterCardsByText(movies, searchText)
  }
};

const filterCardsByText = (movies, searchText) => {
    return movies.filter(item => 
      (item.nameRU !== null && item.nameRU.toLowerCase().includes(searchText.toLowerCase())) ||
      (item.nameEN !== null && item.nameEN.toLowerCase().includes(searchText.toLowerCase()))  )
};

const filterCardsByCheckbox = (movies) => {
    return movies.filter(item => item.duration <= DURATION_SHORT_MOVIES)
};

const defineShownCardsParameters = (pageWidth) => {
    if (pageWidth >= 1280) {
        return {
          numOfInitialCards: NUM_OF_INITIAL_CARDS_PAGE_WIDTH_1280,
          maxNumOfAddedCards: NUM_OF_ADDED_CARDS_PAGE_WIDTH_1280
        }
      } else if (pageWidth >= 768) {
        return {
          numOfInitialCards: NUM_OF_INITIAL_CARDS_PAGE_WIDTH_768,
          maxNumOfAddedCards: NUM_OF_ADDED_CARDS_PAGE_WIDTH_768
        }
      } else {
        return {
          numOfInitialCards: NUM_OF_INITIAL_CARDS_PAGE_WIDTH_480,
          maxNumOfAddedCards: NUM_OF_ADDED_CARDS_PAGE_WIDTH_480
        }
      }
};

export { projectInternalPagesList, minutesIntoHoursConversion, filterCards, filterCardsByText, filterCardsByCheckbox, defineShownCardsParameters };
