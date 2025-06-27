import { Component, OnInit } from '@angular/core';
import { Facesnap } from './facesnap/facesnap';
import { FacesnapModel } from './models/facesnap-model';

@Component({
  selector: 'app-root',
  imports: [Facesnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  mySnap!: FacesnapModel;
  myOtherSnap!: FacesnapModel;
  myLastSnap!: FacesnapModel;

  ngOnInit() {
    this.mySnap = new FacesnapModel(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      10,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    );

    this.myOtherSnap = new FacesnapModel(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      new Date(),
      6,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/500px-Three_Rock_Mountain_Southern_Tor.jpg',
    );

    this.myLastSnap = new FacesnapModel(
      'Un bon repas',
      'Miam, délicieux !',
      new Date(),
      156,
      'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    );

  }
}
