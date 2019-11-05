import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AreaEnum } from 'src/app/models/enums/area-enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  area: any;
  language: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.area = { code: params.get('area'), value: AreaEnum[params.get('area')] };
      this.language = params.get('language');
      console.log({ area: this.area, language: this.language });
    });
  }

}
