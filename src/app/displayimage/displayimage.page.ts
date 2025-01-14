import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.page.html',
  styleUrls: ['./displayimage.page.scss'],
  standalone:false
})
export class DisplayimagePage implements OnInit {
  
  exportedImages: string[] = [];

  constructor(  private navController:NavController,
                private storage:Storage
                ) { 
            
            this.getImages();
  }



  ngOnInit() {

    
   
  }

  async getImages(){
     const images       = await this.storage.get('exportedImages');
    this.exportedImages = images ? JSON.parse(images) : [];
  }
  goBack() {
    this.navController.back();
  }

}
