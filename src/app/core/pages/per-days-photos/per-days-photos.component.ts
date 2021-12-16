import { Component, OnInit } from '@angular/core';
import { MarsImagesService } from '../../services/mars-images.service';
@Component({
  selector: 'app-per-days-photos',
  templateUrl: './per-days-photos.component.html',
  styleUrls: ['./per-days-photos.component.css']
})
export class PerDaysPhotosComponent implements OnInit {
  constructor(private MarsImage: MarsImagesService) { }
  marsPhotos = [];
  ngOnInit(): void {
    this.MarsImage.getImagesMarsAPI().subscribe((res) => {
      this.marsPhotos = res.photos;
      console.log(res.photos);
    });
  }
} 
