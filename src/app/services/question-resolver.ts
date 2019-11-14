import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { QuestionService } from './question.service';
import { AreaEnum } from '../models/enums/area-enum';
import { Question } from '../models/objects/question';

@Injectable()
export class QuestionResolver implements Resolve<Question[]> {
  area;
  language;
  size;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.area = { code: route.params['area'], value: AreaEnum[route.params['area']] };
    this.language = route.params['language'];
    this.size = parseInt(route.params['size']);
    return this.questionService.getQuestions(this.area.code, this.language, this.size);
  }

  constructor(private questionService: QuestionService) { }
}
