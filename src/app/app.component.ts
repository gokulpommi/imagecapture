import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private storage: Storage,
              ) {

    this.storage.create();

    this.initializeapp();

  }

  initializeapp(){
     StatusBar.setBackgroundColor({
      color: '#357A63' 
    });
  }
}
