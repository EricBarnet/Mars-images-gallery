import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerDaysPhotosComponent } from '../pages/per-days-photos/per-days-photos.component';
@Injectable({
  providedIn: 'root'
})
export class MarsImagesService {
  // marsPhotos = [{id: "1", img_src: "https://cdn.pixabay.com/photo/2017/02/09/12/02/mars-2051748__340.png"}, {id: "2", img_src:"https://cdn.pixabay.com/photo/2017/08/17/11/50/mars-2651003_1280.png"}, {id: "3", img_src: "https://cdn.pixabay.com/photo/2017/08/17/11/50/mars-2651003_1280.png"}];


  apiURL: string= 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+ng(infoannee+'-'+mois+'-'+jour+'&api_key=Z1S7YmeDMwOd9kYXaovqrLhTFxoXUYoRZHe3CbWH';

  constructor(private http: HttpClient) { }

  getImagesMarsAPI( ){
    return this.http.get<any>(this.apiURL);
  }
}
