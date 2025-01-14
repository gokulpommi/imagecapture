import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Router } from '@angular/router';
import { LoadingController,ToastController  } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-captureimage',
  templateUrl: './captureimage.page.html',
  styleUrls: ['./captureimage.page.scss'],
  standalone:false
})
export class CaptureimagePage implements OnInit {

  @ViewChild('canvasElement', { static: false }) canvasElement!: ElementRef<HTMLCanvasElement>;

  private canvasContext!: CanvasRenderingContext2D;
  exportWidth   : any; 
  exportHeight  : any; 
  defaultWidth  : any;
  defaultHeight : any;
  images        : string[] = []; // Store exported images

  constructor( private router: Router,
               private loadingController:LoadingController,
               private toastController:ToastController,
               private storage:Storage,
               ) {

  }

  ngOnInit() {

   
  }
  
  ngAfterViewInit() {
    this.canvasContext = this.canvasElement.nativeElement.getContext('2d')!;
  }

  async addImage() {
    const image = await Camera.getPhoto({
      quality       : 90,
      allowEditing  : false,
      resultType    : CameraResultType.DataUrl,
    });

    if (image?.dataUrl) {
      const img = new Image();
      img.onload = () => {
        this.canvasContext.clearRect(0, 0, this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height);
        this.canvasElement.nativeElement.width = img.width;
        this.canvasElement.nativeElement.height = img.height;
        this.defaultWidth  = img.width;
        this.defaultHeight = img.height;
        this.canvasContext.drawImage(img, 0, 0, img.width, img.height);
      };
      img.src = image.dataUrl;
    }
  }

  async exportImage() {

    const canvas = this.canvasElement.nativeElement;

    
    const isEmpty = !canvas.getContext('2d')?.getImageData(0, 0, canvas.width, canvas.height).data.some((value:any) => value !== 0);

    if (isEmpty) {
      const toast = await this.toastController.create({
        message   : 'The canvas is empty. Please add image before exporting.',
        duration  : 3000,
        color     : 'warning',
        position  : 'bottom',
      });
      await toast.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Processing image...',
      spinner: 'crescent',
    });

    await loading.present();

    const resizedCanvas  = document.createElement('canvas');
    resizedCanvas.width  = this.exportWidth  ? this.exportWidth  : this.defaultWidth;
    resizedCanvas.height = this.exportHeight ? this.exportHeight : this.defaultHeight;

    const ctx = resizedCanvas.getContext('2d')!;
    ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, this.exportWidth?this.exportWidth: this.defaultWidth, this.exportHeight?this.exportHeight: this.defaultHeight);

    const exportedImage = resizedCanvas.toDataURL('image/jpeg', 1.0);
    this.images.push(exportedImage);
    this.storage.set('exportedImages', JSON.stringify(this.images));

    this.canvasContext.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    this.exportWidth  = null;
    this.exportHeight = null;

    setTimeout(async () => {
      await loading.dismiss(); 
      this.router.navigate(['/displayimage']);
    }, 2000);
  }

}
