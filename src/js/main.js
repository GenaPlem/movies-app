import { checkUrl } from "./utils";

checkUrl()

window.addEventListener('hashchange', (e) => {
    checkUrl()
})

