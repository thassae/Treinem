import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  openModal(name: string) {
    $("[id='" + name + "']").addClass('is-active');
  }

  closeModal(name: string) {
    $("[id='" + name + "']").removeClass('is-active');
  }
}
