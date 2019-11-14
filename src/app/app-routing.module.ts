import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/content/start/start.component';
import { QuestionComponent } from './components/content/question/question.component';
import { QuestionResolver } from './services/question-resolver';


const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'question/:area/:language/:size',
    component: QuestionComponent,
    resolve: {
      questions: QuestionResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
