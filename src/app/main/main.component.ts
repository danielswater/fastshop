import { Component, OnInit } from '@angular/core';
import { PopularMoviesModel } from './../models/popular-movies.model';
import { FiltersService } from './../services/filters.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private count: number;
  public currentPage: number = 1;
  public page: number;
  private popularMovies: Array<PopularMoviesModel> = [];
  private voteAverage: Array<number> = [];
  private outerStrokeColor: Array<string> = [];
  private innerStrokeColor: Array<string> = [];
  public genresById: any;
  public total_results: any;

  constructor(
    private fs: FiltersService
    ) { }

  ngOnInit() {
/*     this.filterButton.getDataByGenres().subscribe(data => {
      this.data = data;
    }) */
    this.getPopularMovies();
  }

  sendDataToGenreId(data) {
    this.genresById = data;
    this.getPopularMovies(null, this.genresById);
  }

  getPopularMovies(page?: any, filter?: any){
    this.fs.getAllPopularMovies(page, filter).subscribe(data => {
      this.popularMovies = data;
      this.count = this.popularMovies['results'].length;
      this.total_results = this.popularMovies['total_results'];
      for(let i = 0; i < this.count; i++){
        // Show percent popularity
        this.voteAverage[i] = this.popularMovies['results'][i].vote_average * 10;
        // Colors of percent
        if(this.voteAverage[i] < 25){
          this.outerStrokeColor[i] = "#ff9393";
          this.innerStrokeColor[i] = "#ff7f7f";
        }
        if(this.voteAverage[i] > 25 && this.voteAverage[i] < 50){
          this.outerStrokeColor[i] = "#ffee93";
          this.innerStrokeColor[i] = "#dbc93d";
        }
        if(this.voteAverage[i] > 50 && this.voteAverage[i] < 75){
          this.outerStrokeColor[i] = "#d9ff93";
          this.innerStrokeColor[i] = "#abdb3d";
        }
      }
    })
    return this.total_results;
  }

  // PAGINATION
  pageChanged(event: any) {
    this.page = event.page;
    this.getPopularMovies(this.page)
  }

}
