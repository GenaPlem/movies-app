import { formateDate, generateImageUrl, calculateRate, generateTitle } from "./utils";


export const renderMovies = (movies, path) => (`
    <section>
        <div class='container'>
            <h1>${generateTitle(path)}</h1>
            <div class="${path}">
            ${movies.map(movie => renderMovie(movie, path)).join('')}
            </div>
        </div>
    </section>
    `)

export const renderMovie = ({ id, poster_path, original_title, vote_average, release_date}, selector) => (
    `<div class="${selector}__movie">
        <a href="#movieId=${id}"><img src="${generateImageUrl(poster_path, 200)}" alt="${original_title}">
        <div class="${selector}__title">${original_title}</div></a>
        <div class="${selector}__rate">${calculateRate(vote_average)}</div>
        <div class="${selector}__date">${formateDate(release_date)}</div>
    </div>`
)

export const renderMovieDetails = ({backdrop_path, original_title, overview, homepage, release_date, vote_average}) => (`
    
    <div class='container'>
        <section class="details">
            <img class="details__img" src="${generateImageUrl(backdrop_path, 1280)}"</img>
            <h1 class="details__title">${original_title}</h1>
            <p class="details__overview">${overview}</p>
            <a class="details__website" href="${homepage}">WEBSITE</a>
            <p class="details__date">Release: ${formateDate(release_date)}</p>
            <span class="details__rate">${calculateRate(vote_average)}</span>
        </section>
    </div>
    `)

export const renderError = ({status_code, status_message}) => (`
<section>
    <div class='container'>
        <h1 class="Error__code">Error №: ${status_code}</h1>
        <div class="Error__message">
        ${status_message}
        </div>
    </div>
</section>
`)

export const renderSearchMovies = (movies, path) => (`
    <section>
        <div class='container'>
            <h1>Search by: ${generateTitle(path)}</h1>
            <div class="search">
            ${movies.map(movie => renderSearchMovie(movie)).join('')}
            </div>
        </div>
    </section>
    `)

export const renderSearchMovie = ({ id, poster_path, original_title, vote_average, release_date}) => (
    `<div class="search__movie">
        <a href="#movieId=${id}"><img src="${generateImageUrl(poster_path, 200)}" alt="${original_title}">
        <div class="search__title">${original_title}</div></a>
        <div class="search__rate">${calculateRate(vote_average)}</div>
        <div class="search__date">${formateDate(release_date)}</div>
    </div>`
)