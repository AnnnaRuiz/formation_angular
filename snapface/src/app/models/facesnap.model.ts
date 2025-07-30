import { withHashLocation } from "@angular/router";
import { SnapType } from "./snap-type.type";

export class FacesnapModel {

    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public createdAt: Date,
                public snaps: number,
                public imageUrl: string) {
            
        this.id = crypto.randomUUID().substring(0,8);
    }

    
    addSnap() : void {
        this.snaps++;
    }
    
    removeSnap() : void {
        this.snaps--;
    }

    snap(snapType: SnapType): void {
        if (snapType === 'snap') {
            this.addSnap();
        } 
        else if (snapType === 'unsnap') {
            this.removeSnap();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FacesnapModel {
        this.setLocation(location);
        return this;
    }

}