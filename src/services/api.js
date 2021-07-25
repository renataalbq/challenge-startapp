const api_key = 'cbd351c2a8d0703e52c7d09d292a3acc';

const BASE_URL = `https://api.themoviedb.org/3`
const MOVIE_URL = `${BASE_URL}/movie/popular?api_key=${api_key}`;
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${api_key}`;


export async function getMovies(page) {
  const response = await fetch(`${MOVIE_URL}&page=${page}&language=pt-BR`)
  const data = await response.json();
  
  return data;
}

export async function searchMovies(query, page) {
  const response = await fetch(`${SEARCH_URL}&query=${query}&page=${page}`)
  const data = await response.json();

  return data;
}

export {api_key, BASE_URL};