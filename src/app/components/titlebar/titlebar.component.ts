import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

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
    if (this.electronService.remote.getCurrentWindow().isMaximized()) {
      document.getElementById("window-btn").classList.remove('fa-window-maximize');
      document.getElementById("window-btn").classList.add('fa-window-restore');
    } else {
      document.getElementById("window-btn").classList.remove('fa-window-restore');
      document.getElementById("window-btn").classList.add('fa-window-maximize');
    }
  }

  minimizeWindow() {
    this.electronService.ipcRenderer.send('minimize');
  }

}
