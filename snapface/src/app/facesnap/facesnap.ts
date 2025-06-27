import { Component, OnInit, Input } from '@angular/core';
import { FacesnapModel } from '../models/facesnap-model';

@Component({
  selector: 'app-facesnap',
  imports: [],
  templateUrl: './facesnap.html',
  styleUrl: './facesnap.scss'
})

export class Facesnap implements OnInit {
  @Input() facesnap!: FacesnapModel

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!'
    this.userHasSnapped = false;

  }

  onSnap() {
    if (this.userHasSnapped){
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(){
    this.facesnap.removeSnap();
    this.snapButtonText = 'Oh Snap!'
    this.userHasSnapped = false;
  }

  snap(){
    this.facesnap.addSnap();
    this.snapButtonText = 'Oops, Unsnap!'
    this.userHasSnapped = true;
  }
}
