import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from './../const/const';
import { MovieModel } from './../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovie(movieId: number): Observable<MovieModel[]>{
    return this.http.get(Constants.MOVIE+movieId+Constants.KEY+Constants.LANGUAGE)
    .pipe(map((res) => res as MovieModel[]));
  }

  public getImageByMovieId(movieId: number): Observable<any[]>{
    return this.http.get(Constants.MOVIE+movieId+'/images'+Constants.KEY+Constants.LANGUAGE+'&include_image_language=en,null')
    .pipe(map((res) => res as any[]));
  }

  public getCredits(movieId: number): Observable<any[]>{
    return this.http.get(Constants.MOVIE+movieId+Constants.KEY+'&append_to_response=credits')
    .pipe(map((res) => res as any[]));
  }

  public getMovieInfo(movieId: number): Observable<any[]>{
    return this.http.get(Constants.MOVIE+movieId+Constants.KEY+'&append_to_response=videos')
    .pipe(map((res) => res as any[]));
  }

  public getCreditsByMovie(movieId: number): Observable<any[]>{
    return this.http.get(Constants.MOVIE+movieId+'/credits'+Constants.KEY)
    .pipe(map((res) => res as any[]));
  }

  public getTranslation(movieId: number): Observable<any[]>{
    return this.http.get(Constants.MOVIE+movieId+Constants.KEY+Constants.LANGUAGE+'&append_to_response=keywords')
    .pipe(map((res) => res as any[]));
  }
}
