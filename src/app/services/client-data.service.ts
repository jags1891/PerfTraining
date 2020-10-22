import { Client } from "./../models/client";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ClientDataService {
  clientDetails: Client;
  constructor() {
    this.clientDetails = new Client();
  }
}
