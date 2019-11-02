import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToList'
})
export class EnumToListPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return Object.keys(value).map(item => { return { 'key': item, 'value': value[item] } });;
  }
}
