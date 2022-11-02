import { generateApiUrl } from "./utils";
import { renderMovie } from "./templates";

export const getData = (path, selector) => {
    return fetch(generateApiUrl(path))
    .then(res => res.json()) 
    .then(data => {
        const movies = data.results.map(movie => renderMovie(movie, selector)).join('');

        document.querySelector(`.${selector}`).innerHTML += movies
    })
}