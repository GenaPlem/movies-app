import { generateApiUrl } from "./utils";
import { renderMovies, renderMovieDetails, renderError } from "./templates";

export const getMovies = (path) => {
    return fetch(generateApiUrl(path))
    .then(res => res.json()) 
    .then(data => {
        const root = document.querySelector('#root')

        if(data.success === false) {
            root.innerHTML = renderError(data)
        } else {
            root.innerHTML = renderMovies(data.results, path);
        }
    })
} 

export const getMovieDetails = (path) => {
    return fetch(generateApiUrl(path))
    .then(res => res.json()) 
    .then(data => {
        const root = document.querySelector('#root')

        if(data.success === false) {
            root.innerHTML = renderError(data)
        } else {
            root.innerHTML = renderMovieDetails(data);
        }
    })
} 