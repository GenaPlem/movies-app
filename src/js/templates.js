import { formateDate, generateImageUrl, calculateRate } from "./utils";

export const renderMovie = ({ poster_path, original_title, vote_average, release_date}, selector) => (
    `<div class="${selector}__movie">
        <img src="${generateImageUrl(poster_path)}" alt="${original_title}>"<br>
        <div class="${selector}__title">${original_title}</div>
        <div class="${selector}__rate">${calculateRate(vote_average)}%</div>
        <div class="${selector}__date">${formateDate(release_date)}</div>
    </div>`
)