import { Injectable } from '@angular/core';
import { AreaEnum } from '../models/enums/area-enum';
import { Question } from '../models/objects/question';
import { Observable } from 'rxjs';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  path;
  fs;
  constructor(private electronService: ElectronService, private http: HttpClient) {
    this.path = this.electronService.remote.require('path');
    this.fs = this.electronService.remote.require('fs');
  }

  getQuestions(area: AreaEnum, language: string, size: number): Observable<Question[]> {
    var directoryPath = this.path.join(__dirname, '\\assets\\questions\\' + area);
    let questions: Question[] = [];

    this.fs.readdirSync(directoryPath).forEach((file) => {
      // Do whatever you want to do with the file
      let jsonURL = directoryPath + "\\" + file;
      let jsonContent = this.fs.readFileSync(jsonURL, { encoding: 'utf-8' });
      questions.push(JSON.parse(jsonContent));
    });

    return new Observable(observer => {
      observer.next(questions),
        observer.complete();
    });
  }

  getJSON(url: string): Observable<any> {
    return this.http.get(url);
  }
}
