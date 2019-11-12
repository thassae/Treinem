import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AreaEnum } from 'src/app/models/enums/area-enum';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/objects/question';
import { ElectronService } from 'ngx-electron';
import { Option } from 'src/app/models/objects/option';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  area: any;
  language: string;
  size: number;
  questions: Question[];
  currentQuestion: Question;
  currentQuestionNumber: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService, private electronService: ElectronService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.area = { code: params.get('area'), value: AreaEnum[params.get('area')] };
      this.language = params.get('language');
      this.size = parseInt(params.get('size'));
      this.questionService.getQuestions(this.area.code, this.language, this.size).subscribe(questions => {
        this.questions = questions;
        this.currentQuestion = questions.pop();
        this.currentQuestionNumber++;
      });
    });
  }

  openLink(keyword: string) {
    let searchString = keyword.split(' ').join('+');
    this.electronService.shell.openExternal('https://duckduckgo.com/?kl=br-pt&kz=1&q=\\' + searchString);
  }

  selectOption(option: Option) {
    option.isSelected = true;
    this.currentQuestion.isAnswered = true;
    if (!option.isRight) {
      for (let i = 0; i < this.currentQuestion.options.length; i++) {
        if (this.currentQuestion.options[i].isRight) {
          this.currentQuestion.options[i].isSelected = true;
        }
      }
    }
  }
}
