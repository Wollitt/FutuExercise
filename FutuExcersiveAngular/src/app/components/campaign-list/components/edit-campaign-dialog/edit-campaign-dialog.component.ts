import {Component, Inject} from '@angular/core';
import {EditCampaignDialogResult} from "../../interfaces/edit-campaign-dialog-result";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Towns} from "../../interfaces/towns";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CampaignDTO} from "../../../../models/CampaignDTO";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MatRadioChange} from "@angular/material/radio";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-edit-campaign-dialog',
  templateUrl: './edit-campaign-dialog.component.html',
  styleUrls: ['./edit-campaign-dialog.component.scss']
})

export class EditCampaignDialogComponent {

  auto_keywords: string[] = ["keyword", "next keyword", "another keyword", "different keyword"]
  filtered_auto_keywords!: Observable<string[]>;
  control = new FormControl('')


  dialogData: EditCampaignDialogResult = {
    name: "",
    keywords: "",
    bid_amount: 0,
    campaign_fund: 0,
    status: false,
    town: Towns.KRAKOW,
    radius: 0,
    canceled: false
  }

  editCampaignForm!: FormGroup;

  towns: Towns[] = [];
  selectedTown!: Towns;

  constructor(public reference: MatDialogRef<EditCampaignDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public campaignData: CampaignDTO) {
    this.editCampaignForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      keywords: new FormControl(null, [Validators.required]),
      bid_amount: new FormControl(null, [Validators.min(0), Validators.required]),
      campaign_fund: new FormControl(null, [Validators.min(0), Validators.required]),
      radius: new FormControl(null, [Validators.min(0), Validators.required]),
      town: new FormControl(null, [Validators.required])
    });

    this.filtered_auto_keywords = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
    );

    reference.disableClose = true;

    this.dialogData.name = campaignData.name;
    this.dialogData.keywords = campaignData.keywords;
    this.dialogData.bid_amount = campaignData.bid_amount;
    this.dialogData.campaign_fund = campaignData.campaign_fund;
    this.dialogData.radius = campaignData.radius;
    this.dialogData.status = campaignData.status;

    this.towns = Object.values(Towns);
    this.selectedTown = campaignData.town;
  }

  closeDialog() {
    this.dialogData.canceled = true;
    this.reference.close(this.dialogData);
  }

  onChange(ob: MatCheckboxChange) {
    this.dialogData.status = ob.checked;
  }

  cardTypeChanged(buttonClicked: MatRadioChange) {
    this.selectedTown = buttonClicked.value;
    this.dialogData.town = this.selectedTown;
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.auto_keywords.filter(keyword => this._normalizeValue(keyword).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
