const API_KEY = "b7d697301ef6b89a308e4a2eddebc4f8";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRate: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_networks=99`,
};

export default requests;
