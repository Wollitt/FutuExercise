import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { AddCampaignDialogComponent } from './components/campaign-list/components/add-campaign-dialog/add-campaign-dialog.component';
import { DeleteCampaignDialogComponent } from './components/campaign-list/components/delete-campaign-dialog/delete-campaign-dialog.component';
import { EditCampaignDialogComponent } from './components/campaign-list/components/edit-campaign-dialog/edit-campaign-dialog.component';
import { CampaignComponent } from './components/campaign-list/components/campaign/campaign.component';
import {MatDialogModule} from "@angular/material/dialog";
import {RxStomp} from "@stomp/rx-stomp";
import {environment} from "../environments/environment";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSortModule} from "@angular/material/sort";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    AddCampaignDialogComponent,
    DeleteCampaignDialogComponent,
    EditCampaignDialogComponent,
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatRippleModule,
    MatSnackBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [
    {
      provide: RxStomp,
      useFactory: () => {
        const rxStomp = new RxStomp();
        rxStomp.configure({
          brokerURL: environment.wsUrl
        });

        rxStomp.activate()
        return rxStomp;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
