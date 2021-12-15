import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  constructor() { }
  @Input() marsPhotos: {
    id: string;
    img_src: string;
}[] = [];


  ngOnInit(): void {
    console.log(this.marsPhotos);
  }
 
  

}
