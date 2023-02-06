import {Component, OnInit} from '@angular/core';
import {DeleteCampaignDialogResult} from "../../interfaces/delete-campaign-dialog-result";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-campaign-dialog',
  templateUrl: './delete-campaign-dialog.component.html',
  styleUrls: ['./delete-campaign-dialog.component.scss']
})
export class DeleteCampaignDialogComponent implements OnInit {

  dialogData: DeleteCampaignDialogResult = {
    deleteCampaign: true
  }

  constructor(public reference: MatDialogRef<DeleteCampaignDialogComponent>) {
    reference.disableClose = true;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogData.deleteCampaign = false;
    this.reference.close(this.dialogData);
  }
}
