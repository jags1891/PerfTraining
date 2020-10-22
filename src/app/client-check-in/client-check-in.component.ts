import { Medications } from "./../models/medication";
import { Client } from "./../models/client";
import { Component, OnInit } from "@angular/core";
import { ClientDataService } from "../services/client-data.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Person } from "../models/person";
import { Biometrics } from "../models/biometrics";
import { Coach } from "../models/coach";
import { Router } from "@angular/router";

@Component({
  selector: "app-client-check-in",
  templateUrl: "./client-check-in.component.html",
  styleUrls: ["./client-check-in.component.css"],
})
export class ClientCheckInComponent implements OnInit {
  clientDetails: Client;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private clientData: ClientDataService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.clientDetails = new Client();
    this.clientDetails.clientID = 123;
    this.clientDetails.person = new Person();
    this.clientDetails.coach = new Coach();
    this.clientDetails.biometrics = new Biometrics();
    this.clientDetails.medications = new Array<Medications>();
    this.clientDetails.medications.push(new Medications());

    console.log(this.clientDetails);
  }

  ngOnInit() {
    try {
      this.firstFormGroup = this._formBuilder.group({
        txtFirstName: ["", Validators.required],
        txtLastName: ["", Validators.required],
        txtEmail: ["", Validators.required],
      });
    } catch (err) {
      console.log("error in firstFormGroup: " + err);
    }

    try {
      this.secondFormGroup = this._formBuilder.group({
        optCoach: ["", Validators.required],
      });
    } catch (err) {
      console.log("error in secondFormGroup: " + err);
    }

    try {
      this.thirdFormGroup = this._formBuilder.group({
        txtMedName: new FormControl("", Validators.required),
        txtDosage: new FormControl("", Validators.required),
        optMedType: new FormControl("", Validators.required),
      });
    } catch (err) {
      console.log("error in thirdFormGroup: " + err);
    }
  }

  btnSubmit() {
    this.router.navigateByUrl('/success');
  }
}
