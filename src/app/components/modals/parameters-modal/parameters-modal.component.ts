import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AreaEnum } from 'src/app/models/enums/area-enum';


@Component({
  selector: 'parameters-modal',
  templateUrl: './parameters-modal.component.html',
  styleUrls: ['./parameters-modal.component.scss']
})
export class ParametersModalComponent implements OnInit {
  areas = AreaEnum;
  selectedArea: string;
  language: string;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.selectedArea = "NATUREZA";
  }

  closeModal() {
    this.modalService.closeModal('parametersModal');
  }

  startTraining() {
    console.log({ 'areaSelecionada': this.selectedArea, 'linguaEstrangeira': this.language });
    this.closeModal();
  }
}
