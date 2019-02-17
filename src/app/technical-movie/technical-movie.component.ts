import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";
import { MovieModel } from './../models/movies.model';
import { MovieService } from './../services/movie.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'technical-movie',
  templateUrl: './technical-movie.component.html',
  styleUrls: ['./technical-movie.component.scss']
})
export class TechnicalMovieComponent implements OnInit {

  public modalRef: BsModalRef;
  public iframe_html: any;
  private movie: Array<MovieModel> = [];
  public outerStrokeColor: string;
  public innerStrokeColor: string;
  public voteAverage: number;
  private movieId: any;
  public safeSrc: SafeResourceUrl;

  constructor(
    private sanitizer:DomSanitizer,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private ms: MovieService
    ) { }

    ngOnInit() {
      this.movieId = this.route.snapshot.paramMap.get("idMovie")
      this.getMovieById(this.movieId);
    }

    private getMovieById(movieId: number){
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
          //Total votes
          this.voteAverage = this.movie['vote_average'] * 10;
          if(this.voteAverage < 25){
            this.outerStrokeColor = "#ff9393";
            this.innerStrokeColor = "#ff7f7f";
          }
          if(this.voteAverage > 25 && this.voteAverage < 50){
            this.outerStrokeColor = "#ffee93";
            this.innerStrokeColor = "#dbc93d";
          }
          if(this.voteAverage > 50 && this.voteAverage < 75){
            this.outerStrokeColor = "#d9ff93";
            this.innerStrokeColor = "#abdb3d";
          }
          this.movie['technical'] = technical;
        })
        this.ms.getMovieInfo(movieId).subscribe(res => {
          this.movie['trailerUrl'] = "https://www.youtube.com/embed/"+res['videos']['results'][0].key;
        })
      })
      return this.movie;
    }

    public openModal(template: TemplateRef<any>) {
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie['trailerUrl']);
      this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    }
  }
