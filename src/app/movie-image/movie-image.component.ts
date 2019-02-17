import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'movie-image',
  templateUrl: './movie-image.component.html',
  styleUrls: ['./movie-image.component.scss']
})
export class MovieImageComponent implements OnInit {

  private image: Array<any> = [];
  private imgBg: string;
  private movieId: any;

  constructor(
    private route: ActivatedRoute,
    private ms: MovieService
    ) { }

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get("idMovie");
    this.getImageByMovieId(this.movieId);
  }
  private getImageByMovieId(movieId: number){
    this.ms.getImageByMovieId(movieId).subscribe(res => {
      this.image = res['posters'].slice(0,1);
      this.imgBg = this.image[0].file_path;
    })
  }

}
