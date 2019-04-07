import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CardScheme} from "../_models/cardScheme";
import {Payment} from "../_models/payment";

@Injectable({providedIn: 'root'})
export class PaymentService{
    constructor(private http: HttpClient){}

    // delete user card
    get(cardId: number){
        return this.http.get<Payment[]>(`${config.apiUrl}/api/cards/${cardId}/payments`);
    }

}