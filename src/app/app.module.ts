import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/content/start/start.component';
import { ParametersModalComponent } from './components/modals/parameters-modal/parameters-modal.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    StartComponent,
    ParametersModalComponent
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
