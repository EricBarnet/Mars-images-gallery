import { Component, OnInit } from '@angular/core';
import { MarsImagesService } from '../../core/services/mars-images.service';
@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {
  constructor(private MarsImage: MarsImagesService) {
    this.MarsImage = MarsImage;
  }
  annee: any;
  mois: any;
  jour: any;
  marsPhotos = [];


  dateChange() {
    this.MarsImage.changerDate(this.jour, this.mois, this.annee);
    this.MarsImage.getImagesMarsAPI().subscribe(
      (res) => {
        this.marsPhotos = res.photos;
        console.log(res.photos);
      },
    );
  }


  ngOnInit(): void {
    this.jour = this.MarsImage.getJour();
    this.mois = this.MarsImage.getMois();
    this.annee = this.MarsImage.getAnnee();

    this.MarsImage.getImagesMarsAPI().subscribe((res) => {
      this.marsPhotos = res.photos;
      console.log(res.photos);
    }
    ); 
  }
}
