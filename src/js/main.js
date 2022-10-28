export const {API_KEY} = process.env;

const getData = (request, selector) => {
    const url = 'https://api.themoviedb.org/3';
    return fetch(`${url}${request}?api_key=${API_KEY}`)
    .then(res => res.json())
    
}

const renderMovies = (data, selector) => {
    let res = data.results.map(({ poster_path, original_title, popularity, release_date}) => (
    `<div class="${selector}__movie">
        <img src="https://image.tmdb.org/t/p/w200/${poster_path}" alt="${original_title}>"<br>
        <div class="${selector}__title">${original_title}</div>
        <span class="${selector}__rate">${popularity}</span>
        <div class="${selector}__date">${release_date}</div>
    </div>`
    )).join('');

    document.querySelector('.'+selector).innerHTML += res
    }

getData('/movie/popular')
.then(data => renderMovies(data, 'popular'))

getData('/movie/top_rated')
.then(data => renderMovies(data, 'top_rated'))

getData('/movie/upcoming')
.then(data => renderMovies(data, 'upcoming'))
