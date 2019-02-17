import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GenresModel } from './../models/genres.model';
import { FiltersService } from './../services/filters.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() sendDataToGenreId = new EventEmitter<string>();
  public genres: Array<GenresModel> = [];
  constructor(
    private fs: FiltersService
    ) { }

  ngOnInit() {
    this.getGenres();
  }

  filterClickByGenres(data:string) {
    this.sendDataToGenreId.emit(data);
  }

  getGenres(){
    this.fs.getGenres().subscribe(data => {
      this.genres = data;
    })
  }
}
