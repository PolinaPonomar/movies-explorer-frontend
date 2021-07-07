const projectInternalPagesList = ["/movies", "/saved-movies"]; 

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
    return movies.filter(item => item.duration <= 40)
};

const defineShownCardsParameters = (pageWidth) => {
    if (pageWidth >= 1280) {
        return {numOfInitialCards: 12,maxNumOfAddedCards: 3}
      } else if (pageWidth >= 768) {
        return {numOfInitialCards: 8,maxNumOfAddedCards: 2}
      } else {
        return {numOfInitialCards: 5,maxNumOfAddedCards: 1}
      }
};

export { projectInternalPagesList, minutesIntoHoursConversion, filterCards, filterCardsByCheckbox, defineShownCardsParameters };
