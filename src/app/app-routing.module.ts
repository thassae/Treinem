import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/content/start/start.component';
import { QuestionComponent } from './components/content/question/question.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'question/:area/:language/:size', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
