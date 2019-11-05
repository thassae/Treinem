import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/content/start/start.component';
import { ParametersModalComponent } from './components/modals/parameters-modal/parameters-modal.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { EnumToListPipe } from './pipes/enum-to-list.pipe';
import { QuestionComponent } from './components/content/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    StartComponent,
    ParametersModalComponent,
    EnumToListPipe,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
