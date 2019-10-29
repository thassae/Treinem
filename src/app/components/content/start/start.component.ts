import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  launchWindow() {
    this.electronService.shell.openExternal('https://coursetro.com');
  }

  toggleModal(name){
    var element = document.getElementById(name);
    if (element.classList) {
      element.classList.toggle("is-active");
    }
  }
}
