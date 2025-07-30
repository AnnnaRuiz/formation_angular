import { Injectable } from "@angular/core";
import { FacesnapModel } from "../models/facesnap.model";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})

export class FacesnapService {
    private facesnaps: FacesnapModel[] = [
        new FacesnapModel(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        new Date(),
        10,
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      ),

      new FacesnapModel(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        new Date(),
        6,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/500px-Three_Rock_Mountain_Southern_Tor.jpg',
      ).withLocation("A la montagne"), 
      new FacesnapModel(
        'Un bon repas',
        'Miam, délicieux !',
        new Date(),
        156,
        'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
      )
    ];

    getFacesnaps(): FacesnapModel[] {
        return [...this.facesnaps];
    }

    getFacesnapById(facesnapId: string): FacesnapModel {
        const foundFacesnap = this.facesnaps.find(facesnap => facesnap.id === facesnapId);
        if (!foundFacesnap) {
            throw new Error('Facesnap not found!')
        }
        return foundFacesnap;   
    }

    snapFacesnapById(facesnapId: string, snapType: SnapType): void{
        const facesnap = this.getFacesnapById(facesnapId);
        facesnap.snap(snapType);
    }
}