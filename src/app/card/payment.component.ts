import {Component, OnInit} from '@angular/core';
import {PaymentService, UserService} from '../_services';
import {ActivatedRoute} from "@angular/router";
import {Payment} from "../_models/payment";

@Component({templateUrl: 'payment.component.html'})
export class PaymentComponent implements OnInit {

    constructor(private userService: UserService,
                private paymentService: PaymentService,
                private route: ActivatedRoute) {
    }

    currentUser: any
    payments: Payment[]

    ngOnInit() {
        const cardId = parseInt(this.route.snapshot.paramMap.get("id"))
        this.currentUser = this.userService.getCurrentUser()
        this.paymentService.get(cardId).subscribe(payments => {
            this.payments = payments
        })
    }

}