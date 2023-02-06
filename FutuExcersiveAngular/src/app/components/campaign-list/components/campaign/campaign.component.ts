import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CampaignDTO} from "../../../../models/CampaignDTO";
import {DeleteCampaignDialogComponent} from "../delete-campaign-dialog/delete-campaign-dialog.component";
import {EditCampaignDialogComponent} from "../edit-campaign-dialog/edit-campaign-dialog.component";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent {

  constructor(public dialog: MatDialog) {
  }

  @Input() campaign!: CampaignDTO;

  @Output() deleteCampaignEventEmitter = new EventEmitter<number>();

  @Output() editCampaignEventEmitter = new EventEmitter<CampaignDTO>();

  openCampaignDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteCampaignDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result.deleteCampaign) {
        return;
      }

      this.deleteCampaignEventEmitter.emit(this.campaign.id)
    })
  }

  openCampaignEditDialog() {
    const dialogRef = this.dialog.open(EditCampaignDialogComponent, {
      width: '400px',
      data: this.campaign
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.canceled) {
        return;
      }

      this.editCampaignEventEmitter.emit({
        id: this.campaign.id,
        name: result.name,
        keywords: result.keywords,
        bid_amount: result.bid_amount,
        campaign_fund: result.campaign_fund,
        status: result.status,
        town: result.town,
        radius: result.radius
      });
    });
  }

}
