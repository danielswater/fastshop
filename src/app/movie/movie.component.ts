import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieModel } from './../models/movies.model';
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  private movie: Array<MovieModel> = [];
  private imgBg: string;
  private movieId: any;
  private image: any;
  private technical: Array<any> = [];

  constructor(
    private ms: MovieService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("id")
    this.getMovieById(this.movieId);
    this.getCredits(this.movieId);
  }

  private getMovieById(movieId: number){
    this.movieId = this.route.snapshot.paramMap.get("id");
    this.ms.getMovie(movieId).subscribe(res => {
      this.movie = res;
      let technical: Array<any> = [];
      this.ms.getCredits(movieId).subscribe(res => {
      res['credits']['crew'].forEach(function(entry){
        if(entry['job'] == "Director"){
          technical.push(entry)
        }
        if(entry['job'] == 'Screenplay'){
          technical.push(entry)
        }
      })
      this.movie['technical'] = technical;
    })
    })
    return this.movie;
  }

  private getImageByMovieId(movieId: number){
    //this.getCredits(movieId);
    this.ms.getImageByMovieId(movieId).subscribe(res => {
      this.image = res['posters'].slice(0,1);
      this.imgBg = this.image[0].file_path;
      return this.imgBg;
    })
  }

   private getCredits(movieId: number){
      let technical: Array<any> = [];
      this.ms.getCredits(movieId).subscribe(res => {
      res['credits']['crew'].forEach(function(entry){
        if(entry['job'] == "Director"){
          technical.push(entry)
        }
        if(entry['job'] == 'Screenplay'){
          technical.push(entry)
        }
      })
    })
  }
}
