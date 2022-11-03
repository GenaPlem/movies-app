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
        <a href="#movieId=${id}"><img src="${generateImageUrl(poster_path)}" alt="${original_title}">
        <div class="${selector}__title">${original_title}</div></a>
        <div class="${selector}__rate">${calculateRate(vote_average)}%</div>
        <div class="${selector}__date">${formateDate(release_date)}</div>
    </div>`
)

export const renderMovieDetails = movie => (`
    <section>
        <div class='container'>
            <h1></h1>
            <div class="">
            ${renderMovie(movie)}
            </div>
        </div>
    </section>
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