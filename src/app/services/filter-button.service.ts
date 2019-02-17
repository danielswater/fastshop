import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterButtonService {

  private _dataByGenres: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  public setDataByGenres(data: any){
    this._dataByGenres.next(data);
  }

  public getDataByGenres(): Observable<any> {
    return this._dataByGenres.asObservable();
  }
}
