import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { StartComponent } from './components/content/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
