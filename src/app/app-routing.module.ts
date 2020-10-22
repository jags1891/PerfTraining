import { SuccessComponent } from "./success/success.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ClientCheckInComponent } from "./client-check-in/client-check-in.component";

const routes: Routes = [
  { path: "", component: ClientCheckInComponent },
  { path: "success", component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
