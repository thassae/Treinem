import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'parameters-modal',
  templateUrl: './parameters-modal.component.html',
  styleUrls: ['./parameters-modal.component.scss']
})
export class ParametersModalComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  toggleModal(name: string) {
    this.modalService.toggleModal(name);
  }

}
