import { Component, OnInit } from '@angular/core';
import { Facesnap } from '../facesnap/facesnap';
import { FacesnapModel } from '../models/facesnap.model';
import { FacesnapService } from '../services/facesnaps.service';

@Component({
  selector: 'app-facesnap-list',
  imports: [Facesnap],
  templateUrl: './facesnap-list.html',
  styleUrl: './facesnap-list.scss'
})
export class FacesnapList implements OnInit{
  facesnaps!: FacesnapModel[];

  constructor(private facesnapService: FacesnapService) {}

  ngOnInit() {
    this.facesnaps = this.facesnapService.getFacesnaps();

  }
}
