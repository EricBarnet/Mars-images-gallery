import { Injectable } from '@angular/core';
import { ListImagesComponent } from 'src/app/features/list-images/list-images.component';
import { PerDaysPhotosComponent } from '../pages/per-days-photos/per-days-photos.component';
@Injectable({
  providedIn: 'root'
})
export class MarsImagesService {
  marsPhotos = [{id: "1", img_src: "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2021/02/Mars_Perseverance_photo-big__w770.jpg"}, {id: "2", img_src:"https://img.20mn.fr/E-L-XUw3RlKxpjY0qxLVTg/648x360_le-cratere-jezero-sur-la-planete-mars-photographie-par-perseverance-le-24-fevrier-2021.jpg"}, {id: "3", img_src: "https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2021/03/06/node_171352/38410642/public/2021/03/06/B9726343825Z.1_20210306121836_000%2BG8FHNM53H.1-0.jpg?itok=Hn0ow0hu1615030001"}]

  getListImages(){
    return this.marsPhotos;
  }

  constructor() { }
}
