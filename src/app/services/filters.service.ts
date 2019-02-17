import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from './../const/const';
import { GenresModel } from './../models/genres.model';
import { PopularMoviesModel } from './../models/popular-movies.model';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private http: HttpClient) { }

  public getGenres(): Observable<GenresModel[]>{
    return this.http.get(Constants.GENRES_ENDPOINT)
    .pipe(map((res) => res as GenresModel[]));
  }

  public getAllPopularMovies(page?: any, genres?: number): Observable<PopularMoviesModel[]>{
    let URL = '';
    if(!genres){
      URL = Constants.POPULAR_MOVIES+'&page='+page;
    }
    else{
      URL = Constants.GENRES_MOVIE+genres+'&page='+page;
    }
    return this.http.get(URL)
    .pipe(map(res => res as PopularMoviesModel[]));
  }

  public getMovie(id: number){
  }
}
