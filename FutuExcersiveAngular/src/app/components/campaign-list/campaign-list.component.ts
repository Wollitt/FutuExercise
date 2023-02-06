import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CampaignService} from "../../services/campaign/campaign.service";
import {CampaignWebSocketService} from "../../services/campaignWebSocket/campaign-web-socket.service";
import {CampaignDTO} from "../../models/CampaignDTO";
import {AddCampaignDialogComponent} from "./components/add-campaign-dialog/add-campaign-dialog.component";
import {AddCampaignDTO} from "../../models/AddCampaignDTO";
import {EmeraldAccountService} from "../../services/emeraldAccount/emerald-account.service";

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {

  public balance: number = 0;
  isLoading: boolean = true;
  public campaigns: Array<CampaignDTO> = [];

  displayedColumns: string[] = ['name', 'status', 'keywords']

  constructor(
    public dialog: MatDialog,
    private campaignService: CampaignService,
    private campaignWebSocketService: CampaignWebSocketService,
    private emeraldAccountService: EmeraldAccountService
  ) {
    this.getCampaigns();
    this.getBalance();
    this.connect();
  }

  openCampaignAddDialog() {
    const dialogRef = this.dialog.open(AddCampaignDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      const campaignToAdd: AddCampaignDTO = {
        name: result.name,
        keywords: result.keywords,
        bid_amount: result.bid_amount,
        campaign_fund: result.campaign_fund,
        status: result.status,
        town: result.town,
        radius: result.radius
      };

      if (result.canceled) {
        return;
      }

      this.campaignService.registerCampaign(campaignToAdd).subscribe();
    })

  }

  deleteCampaign(campaignId: number) {
    this.campaignService.deleteCampaign(campaignId).subscribe();
  }

  editCampaign(campaign: CampaignDTO) {
    this.campaignService.editCampaign(campaign).subscribe();
  }

  private getBalance() {
    this.emeraldAccountService.getEmeraldAccount().subscribe(result => {
      this.balance = result.balance;
    });
  }

  private getCampaigns() {
    this.campaignService.getCampaignList().subscribe(data => {
      this.campaigns = data;
    })
  }

  connect() {
    this.campaignWebSocketService.deletedQuestion
      .subscribe((campaign: CampaignDTO) => {
        this.campaigns.forEach((campaignInList, index) => {
          if (campaign.id == campaignInList.id) {
            this.campaigns.splice(index, 1)
            this.getBalance();
          }
        });
      });

    this.campaignWebSocketService.editedQuestion
      .subscribe((editedCampaign: CampaignDTO) => {
        this.campaigns.forEach((campaignInList: CampaignDTO) => {
          if (editedCampaign.id == campaignInList.id) {
            campaignInList.name = editedCampaign.name;
            campaignInList.keywords = editedCampaign.keywords;
            campaignInList.bid_amount = editedCampaign.bid_amount;
            campaignInList.campaign_fund = editedCampaign.campaign_fund;
            campaignInList.town = editedCampaign.town;
            campaignInList.status = editedCampaign.status;
            campaignInList.radius = editedCampaign.radius;
            this.getBalance();
            return;
          }
        });
      });

    this.campaignWebSocketService.newCampaign
      .subscribe((campaign: CampaignDTO) => {
        this.campaigns.push(campaign);
        this.getBalance();
      });
  }

}
