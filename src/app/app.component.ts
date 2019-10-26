import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Treinem';
  
  constructor(private electronService: ElectronService) { }

  launchWindow() {
    this.electronService.shell.openExternal('https://coursetro.com');
  }
}
