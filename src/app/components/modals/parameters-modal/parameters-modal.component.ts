import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AreaEnum } from 'src/app/models/enums/area-enum';
import { Router } from '@angular/router';


@Component({
  selector: 'parameters-modal',
  templateUrl: './parameters-modal.component.html',
  styleUrls: ['./parameters-modal.component.scss']
})
export class ParametersModalComponent implements OnInit {
  areas = AreaEnum;
  selectedArea: string;
  language: string = "pt";

  constructor(private modalService: ModalService, private router: Router) {
  }

  ngOnInit() {
    this.selectedArea = "NATUREZA";
  }

  closeModal() {
    this.modalService.closeModal('parametersModal');
  }

  startTraining() {    
    this.router.navigate(["../question", this.selectedArea, this.language]);
    this.closeModal();
  }
}
