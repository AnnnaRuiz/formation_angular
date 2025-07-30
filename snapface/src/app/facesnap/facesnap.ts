import { Component, OnInit, Input } from '@angular/core';
import { FacesnapModel } from '../models/facesnap.model';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facesnap',
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './facesnap.html',
  styleUrl: './facesnap.scss'
})

export class Facesnap {
  @Input() facesnap!: FacesnapModel;

  constructor(private router: Router){}

  onViewFacesnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
}
