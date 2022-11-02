export const {API_KEY} = process.env;
import { getData } from "./api";

getData('/movie/popular', 'popular')

getData('/movie/top_rated', 'top_rated')

getData('/movie/upcoming', 'upcoming')
