import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ParametersModalComponent } from '../../modals/parameters-modal/parameters-modal.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private electronService: ElectronService, private modalService: ModalService) { }

  ngOnInit() {
  }

  launchWindow() {
    this.electronService.shell.openExternal('https://coursetro.com');
  }

  openModal(name: string) {
    this.modalService.openModal(name);
  }
}
