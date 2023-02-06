import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CampaignListComponent} from "./components/campaign-list/campaign-list.component";

const routes: Routes = [
  {path: '', component: CampaignListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
