import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsightApiService} from './insight-api.service'l

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InsightApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
