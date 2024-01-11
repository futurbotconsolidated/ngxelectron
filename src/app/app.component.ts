import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electronyzer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gulmondatest2';
  constructor(private electronService: ElectronService){

  }

  openExternalApp() {
    console.log('openExternalApp');
    console.log(this.electronService.isMacOS)
    this.electronService.shell.openExternal('https://example.com', { activate: true });
  }

  openItem() {
    console.log('openItem');
    if (this.electronService.shell) {
      console.log('hello')
      this.electronService.shell.openPath('/Users/username/Desktop/file.txt');
    }
    
  }

  
  
}


