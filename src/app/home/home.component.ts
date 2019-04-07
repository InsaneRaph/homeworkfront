import {Component, OnInit} from '@angular/core';
import {CardSchemeService, UserService} from '../_services';
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

    deleteCard(card: CardScheme) {
        if (confirm(`Are you sure you to delete this card ${card.number}`)) {
            this.cardSchemeService.delete(card.id).subscribe(value => this.cards.splice(this.cards.indexOf(card), 1));
        }
    }
}