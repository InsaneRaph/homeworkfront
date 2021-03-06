import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CardScheme} from "../_models/cardScheme";

@Injectable({providedIn: 'root'})
export class CardSchemeService{
    constructor(private http: HttpClient){}

    // add
    add(cardScheme: CardScheme){
        return this.http.post<CardScheme>(`${config.apiUrl}/api/cards`, cardScheme);
    }
    // get user cards
    get(){
        return this.http.get<CardScheme[]>(`${config.apiUrl}/api/cards`);
    }

    // delete user card
    delete(cardId: number){
        return this.http.delete(`${config.apiUrl}/api/cards/${cardId}`);
    }

}