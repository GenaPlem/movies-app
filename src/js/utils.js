import { API_KEY, API_URL, IMG_URL } from "./constants";

export const generateApiUrl = path => `${API_URL}${path}?api_key=${API_KEY}`
export const generateImageUrl = path => `${IMG_URL}${path}`
export const formateDate = (date) => {
    let release = new Date(date)
    return release.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
    }).replace(/ /g, '-');
}
export const calculateRate = rate => rate*10;