import { getSearchMovies } from "./api";
import { checkUrl } from "./utils";

checkUrl()

window.addEventListener('hashchange', (e) => {
    checkUrl()
})

const submit = document.querySelector('.header__search-submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let query = document.querySelector('[name="query"]')
    if (query.value) {
        window.location.hash = `query=${query.value}`
        getSearchMovies(query)
        checkUrl()
        query.value ='';
    }
})