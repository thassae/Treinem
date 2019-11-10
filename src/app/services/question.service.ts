import { Injectable } from '@angular/core';
import { AreaEnum } from '../models/enums/area-enum';
import { Question } from '../models/objects/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(area: AreaEnum, language: string): Observable<Question[]> {
    let json = [{
      type: 'NATUREZA',
      language: 'pt',
      content: `<p>A atmosfera terrestre é composta pelos gases nitrogênio (N2) e oxigênio (O2), que somam cerca de 99%, e por gases traços, entre eles o gás carbônico (CO2), vapor de água (H2O), metano (CH4), ozônio (O3) e o óxido nitroso (N2O), que compõem o restante 1% do ar que respiramos. Os gases traços, por serem constituídos por pelo menos três átomos, conseguem absorver o calor irradiado pela Terra, aquecendo o planeta. Esse fenômeno, que acontece há bilhões de anos, é chamado de efeito estufa. A partir da Revolução Industrial (século XIX), a concentração de gases traços na atmosfera, em particular o CO2, tem aumentado significativamente, o que resultou no aumento da temperatura em escala global. Mais recentemente, outro fator tornou-se diretamente envolvido no aumento da concentração de CO2 na atmosfera: o desmatamento.<p>
      <small>BROWN, I. F.; ALECHANDRE, A. S. Conceitos básicos sobre clima, carbono, florestas e comunidades. A.G. Moreira & S. Schwartzman. As mudanças climáticas globais e os ecossistemas brasileiros. Brasília: Instituto de Pesquisa Ambiental da Amazônia, 2000 (adaptado).</small>       
      <p>Considerando o texto, uma alternativa viável para combater o efeito estufa é:</p>`,
      options: [{
        content: 'reduzir o calor irradiado pela Terra mediante a substituição da produção primária pela industrialização refrigerada.',
        isRight: false
      },
      {
        content: 'promover a queima da biomassa vegetal, responsável pelo aumento do efeito estufa devido à produção de CH4.',
        isRight: false
      },
      {
        content: 'reduzir o desmatamento, mantendo-se, assim, o potencial da vegetação em absorver o CO2 da atmosfera.',
        isRight: true
      },
      {
        content: 'aumentar a concentração atmosférica de H2O, molécula capaz de absorver grande quantidade de calor.',
        isRight: false
      },
      {
        content: 'remover moléculas orgânicas polares da atmosfera, diminuindo a capacidade delas de reter calor.',
        isRight: false
      }],
      keywords: ['Efeito estufa']
    }];

    let stringJson = JSON.stringify(json);

    return new Observable(observer => {
      observer.next(JSON.parse(stringJson)),
        observer.complete();
    });;
  }
}
