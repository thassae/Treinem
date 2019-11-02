import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  toggleModal(name: string) {
    $("[id='" + name + "']").toggleClass('is-active');
  }

}
