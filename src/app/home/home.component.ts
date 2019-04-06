import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services';
import {CardSchemeService} from "../_services";
import {CardScheme} from "../_models/cardScheme";

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {

    constructor(private userService: UserService, private cardSchemeService: CardSchemeService) {
    }

    currentUser: any
    cards: CardScheme[]

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser()
        this.cardSchemeService.get().subscribe(cards => {
            this.cards = cards
        })
    }
}