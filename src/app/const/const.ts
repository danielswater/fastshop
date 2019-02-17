export class Constants {
  public static KEY = '?api_key=abe7c23d9b2c394fe2c3b52420018bd6';
  public static LANGUAGE = '&language=pt-BR';
  public static GENRES_ENDPOINT = `https://api.themoviedb.org/3/genre/movie/list${Constants.KEY}${Constants.LANGUAGE}`;
  public static GENRES_MOVIE = `https://api.themoviedb.org/3/discover/movie${Constants.KEY}${Constants.LANGUAGE}&sort_by=with_genres=`;
  public static POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular${Constants.KEY}${Constants.LANGUAGE}`;
  public static MOVIE = "https://api.themoviedb.org/3/movie/";
  //public static POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${Constants.KEY}${Constants.LANGUAGE}&page=1`;
}
