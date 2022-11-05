import { API_KEY, API_URL, IMG_URL, API_SEARCH } from "./constants";
import { getMovies, getMovieDetails, getSearchMovies } from "./api";

export const generateApiUrl = path => `${API_URL}${path}?api_key=${API_KEY}`
export const generateSearchUrl = search => `${API_SEARCH}?api_key=${API_KEY}&query=${search}`
export const generateImageUrl = (path, size) => `${IMG_URL}w${size}/${path}`
export const formateDate = (date) => {
    let release = new Date(date)
    return release.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
    }).replace(/ /g, '-');
}
export const calculateRate = rate => Math.floor(rate*10)+'%';
export const generateTitle = str => (str[0].toUpperCase() + str.slice(1)).replaceAll('_', ' ');
export const checkUrl = () => {
    const [hash, movieId] = location.hash.split('=')
    if(hash === '#movieId') {
        getMovieDetails(movieId)
    } else if (hash === '#query') {
        getSearchMovies(movieId)
    } else {
        getMovies('popular')
    }
};