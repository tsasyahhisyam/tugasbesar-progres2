import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { DvdService } from "../dvd/dvd.service";
import { Dvd } from "../dvd/dvd.model";
import 'rxjs/add/operator/map';
@Injectable()
export class DataStorageService {
    constructor(private http: Http, private dvdService: DvdService) {}

    storeDvds(){
        return this.http.put('https://ng-dvd-book10.firebaseio.com/dvds.json', this.dvdService
        .getDvds());
    }
    getDvds(){
        this.http.get('https://ng-dvd-book10.firebaseio.com/dvds.json')
        .map(
            (response: Response) => {
                const dvds: Dvd[] = response.json();
                for (let dvd of dvds) {
                    if (!dvd['ingredients']) {
                        dvd['ingredients'] = [];
                    }
                }
                return dvds;
            }
        )
        .subscribe(
            (dvds: Dvd[]) => {
                this.dvdService.setDvds(dvds);
            }
        );
    }
}