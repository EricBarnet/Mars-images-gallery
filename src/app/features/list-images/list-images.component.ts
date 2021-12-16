import { Component, Input, OnInit } from '@angular/core';
import { PerDaysPhotosComponent } from 'src/app/core/pages/per-days-photos/per-days-photos.component';
@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {


  constructor(private PhotosDaysComponent: PerDaysPhotosComponent) { }
  
  @Input() marsPhotos = [];
  @Input() anneePhotos = "";
  @Input() moisPhotos = "";
  @Input() jourPhotos = "";
  
  ngOnInit(): void {
    console.log(this.marsPhotos)
  }
 
  

}
