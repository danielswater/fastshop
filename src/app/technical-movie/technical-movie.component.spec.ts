import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalMovieComponent } from './technical-movie.component';

describe('TechnicalMovieComponent', () => {
  let component: TechnicalMovieComponent;
  let fixture: ComponentFixture<TechnicalMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
