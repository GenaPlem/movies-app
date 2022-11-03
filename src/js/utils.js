import { API_KEY, API_URL, IMG_URL } from "./constants";
import { getMovies, getMovieDetails } from "./api";

export const generateApiUrl = path => `${API_URL}${path}?api_key=${API_KEY}`
export const generateImageUrl = path => `${IMG_URL}${path}`
export const formateDate = (date) => {
    let release = new Date(date)
    return release.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
    }).replace(/ /g, '-');
}
export const calculateRate = rate => rate*10;
export const generateTitle = str => (str[0].toUpperCase() + str.slice(1)).replaceAll('_', ' ');
export const checkUrl = () => {
    const [hash, movieId] = location.hash.split('=')
    if(hash === '#movieId') {
        getMovieDetails(movieId)
    } else {
        getMovies('popular')
    }
};