import {Component, OnInit} from '@angular/core';
import {CardSchemeService} from '../_services';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {CardScheme} from "../_models";

@Component({templateUrl: 'card.component.html'})
export class CardComponent implements OnInit {

    cardForm: FormGroup;
    submitted = false;
    loading = false;
    error = '';


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private cardSchemeService: CardSchemeService
    ) {
    }

    ngOnInit() {
        this.cardForm = this.formBuilder.group({
            number: ['', [Validators.required, Validators.pattern("^(\\d{4}[- ]){3}\\d{4}|\\d{16}$")]],
            holder: ['', Validators.required],
            crypto: ['', [Validators.required, Validators.pattern("^[0-9]{3,4}$")]],
            type: ['', Validators.required],
            expirationMonth: ['', Validators.required],
            expirationYear: ['', Validators.required],
        });

    }

    // convenience getter for easy access to form fields
    get f() {
        return this.cardForm.controls;
    }

    // on submit
    onSubmit() {
        this.submitted = true;

        // stop if form is invalid
        if (this.cardForm.invalid) {
            return;
        }

        this.loading = true;
        const card: CardScheme = {
            id: null,
            number: this.f.number.value.replace(/\D+/g, ''),
            holder: this.f.holder.value,
            type: this.f.type.value,
            crypto: this.f.crypto.value,
            expirationMonth: parseInt(this.f.expirationMonth.value),
            expirationYear: parseInt(this.f.expirationYear.value),
        }


        this.cardSchemeService.add(card)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(["/"]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                }
            )
    }
}