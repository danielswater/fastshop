import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from './../services/movie.service';

declare var $: any;

@Component({
  selector: 'credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  private movieId: string;
  private language: string;
  private casts: Array<any> = [];
  private credits: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private ms: MovieService
    ) { }

    ngOnInit() {
      this.movieId = this.route.snapshot.paramMap.get("idMovie");
      this.getCreditsByMovie(this.movieId);
      this.getMovieInfo(parseInt(this.movieId));
      this.getTranslation(parseInt(this.movieId));
    }

    ngAfterViewInit() {
      setTimeout(function(){
        var maxHeight = Math.max.apply(null, $(".card-content").map(function(){
          return $(this).height();
        }).get());
        $(".card-content").css('min-height', maxHeight);
      }, 1200)
    }

    private getCreditsByMovie(movieId: any){
      this.ms.getCreditsByMovie(movieId).subscribe(res => {
        for(let i = 0; i < 5; i++){
          this.casts[i] = res['cast'][i];
        }
      })
    }

    private getMovieInfo(movieId: number){
      this.ms.getMovieInfo(movieId).subscribe(res =>{
        this.credits = res;
        if(res['status'] === "Released"){
          this.credits['status'] = "Lançado";
          this.credits['country'] = this.credits['production_countries'][0].iso_3166_1.toLowerCase()
        }
        console.log(this.credits);
        return this.credits;
      })
    }

    private getTranslation(movieId: number){
      this.ms.getTranslation(movieId).subscribe(res => {
        for(let i = 0; i < res['spoken_languages'].length; i++){
          if(res['original_language'] == res['spoken_languages'][i].iso_639_1){
            this.language = res['spoken_languages'][i].name;
          }
        }
      })
    }

  }
