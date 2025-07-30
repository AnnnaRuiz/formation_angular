import { Component, OnInit } from '@angular/core';
import { FacesnapModel } from '../models/facesnap.model';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FacesnapService } from '../services/facesnaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-facesnap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-facesnap.html',
  styleUrl: './single-facesnap.scss'
})

export class SingleFacesnap implements OnInit {
  facesnap!: FacesnapModel;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private facesnapService: FacesnapService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFacesnap();
  }

  onSnap() {
    if (this.userHasSnapped){
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(){
    this.facesnapService.snapFacesnapById(this.facesnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap(){
    this.facesnapService.snapFacesnapById(this.facesnap.id, 'snap');
    this.snapButtonText = 'Oops, Unsnap!';
    this.userHasSnapped = true;
  }


  private prepareInterface(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFacesnap(): void {
    const facesnapId = this.route.snapshot.params['id'];
    this.facesnap = this.facesnapService.getFacesnapById(facesnapId);
  }
}
