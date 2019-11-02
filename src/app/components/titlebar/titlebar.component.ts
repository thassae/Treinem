import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import * as $ from 'jquery';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  closeWindow() {
    this.electronService.ipcRenderer.send('close');
  }

  toggleMaximize() {
    this.electronService.ipcRenderer.send('toggleMaximize');
    let isMaximized = this.electronService.remote.getCurrentWindow().isMaximized();
    $('#window-btn').toggleClass('restore-btn', isMaximized);
    $('#window-btn').toggleClass('maximize-btn', !isMaximized);
  }

  minimizeWindow() {
    this.electronService.ipcRenderer.send('minimize');
  }

}
