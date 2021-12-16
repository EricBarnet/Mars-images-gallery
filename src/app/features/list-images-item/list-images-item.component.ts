import { Component, Input, OnInit } from '@angular/core';
import { ListImagesComponent } from '../list-images/list-images.component';
@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {

  constructor(private Images: ListImagesComponent) { }
  @Input() photosMars:any = {};
  ngOnInit(): void {
  }
  


}
