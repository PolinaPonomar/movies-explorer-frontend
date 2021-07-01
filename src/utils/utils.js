import imgOne from '../images/img-1.jpg';
import imgTwo from '../images/img-2.jpg';
import imgThree from '../images/img-3.jpg';

const projectInternalPagesList = ["/movies", "/saved-movies"]; 

const savedCards = [
    {   
        _id: 1,
        link: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
        img: imgOne ,
        name: '33 слова о дизайне',
        duration: '1ч 47м',
    },
    {
        _id: 2,
        link: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
        img: imgTwo,
        name: 'Киноальманах «100 лет дизайна»',
        duration: '1ч 3м',
    },
    {
        _id: 3,
        link: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
        img: imgThree,
        name: 'В погоне за Бенкси',
        duration: '1ч 42м',
    },
]
const minutesIntoHoursConversion = (minutes) => {
    if (Number(minutes) >= 60) {
      if (Number(minutes)%60 === 0) {
        return String(Math.trunc(Number(minutes)/60)) + 'ч';
      }
      return String(Math.trunc(Number(minutes)/60)) + 'ч '+ String(Number(minutes)%60) + 'м';
    } 
    return minutes + 'м';
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

export { minutesIntoHoursConversion, defineShownCardsParameters, savedCards, projectInternalPagesList};
