import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterButtonService } from './services/filter-button.service';
import { FiltersService } from './services/filters.service';
import { MovieService } from './services/movie.service';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from './main/main.component';
import { MovieComponent } from './movie/movie.component';
import { CreditsComponent } from './credits/credits.component';
import { ClickDirective } from './click.directive';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { TechnicalMovieComponent } from './technical-movie/technical-movie.component';

/* NGX-BOOTSTRAP */
import { BsDropdownModule, ModalModule, PaginationModule, TooltipModule } from 'ngx-bootstrap';

/* CIRCLE RATING */
import { NgCircleProgressModule } from 'ng-circle-progress';

/* FONT AWESOME */
import { AngularFontAwesomeModule } from 'angular-font-awesome';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ContainerComponent,
    MainComponent,
    MovieComponent,
    ClickDirective,
    MovieImageComponent,
    TechnicalMovieComponent,
    CreditsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    NgCircleProgressModule.forRoot({
      backgroundPadding: -50,
      radius: 22,
      space: 2,
      unitsFontWeight: "900",
      outerStrokeWidth: 5,
      innerStrokeWidth: 5,
      titleFontSize: "10",
      titleFontWeight: "900",
      subtitleFontWeight: "400",
      imageHeight: 20,
      imageWidth: 20,
      showSubtitle: false,
      startFromZero: false
    })
  ],
  providers: [FilterButtonService, MovieService, FiltersService, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
