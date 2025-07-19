export const API_END_POINT = "http://localhost:8080/api/v1/user";


export const options = {
  method: 'GET',
  //url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjQ2ZDVkZTU3MDBkYTgzN2FkOGVmMjhmM2Q4ZDgwMCIsIm5iZiI6MTc1MjgxNzE0Ny4wNjgsInN1YiI6IjY4NzlkZGZiOGIzYjgxZDM3MTI0Mzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxhYrsMvYPBZofqBFpXJB9s3JtymS3OpFNq5Ks4yX_Q'
  }
};


export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const Search_Movie_URL = "https://api.themoviedb.org/3/search/movie?query=";
export const Banner_URL = "https://image.tmdb.org/t/p/w500"