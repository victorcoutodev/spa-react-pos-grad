import axios from 'axios';

const API_KEY = 'f7cb794db9c7cc2fbdc9bdbc05b5476d';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'));        
    }
}