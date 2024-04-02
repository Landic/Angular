import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudienceComponent } from './audience/audience.component';
import { UniqueFacultiesPipe } from './unique-faculties.pipe';
import { FilterPipe } from './filter.pipe';
import { GroupFilterPipe } from './group-filter.pipe';
import { SortByPipePipe } from './sort-by-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AudienceComponent,
    UniqueFacultiesPipe,
    FilterPipe,
    GroupFilterPipe,
    SortByPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
