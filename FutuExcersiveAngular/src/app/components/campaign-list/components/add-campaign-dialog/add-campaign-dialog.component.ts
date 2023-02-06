import {Component, OnInit} from '@angular/core';
import {AddCampaignDialogResult} from "../../interfaces/add-campaign-dialog-result";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Towns} from "../../interfaces/towns";
import {MatRadioChange} from "@angular/material/radio";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-add-campaign-dialog',
  templateUrl: './add-campaign-dialog.component.html',
  styleUrls: ['./add-campaign-dialog.component.scss']
})
export class AddCampaignDialogComponent implements OnInit {

  auto_keywords: string[] = ["keyword", "next keyword", "another keyword", "different keyword"]
  filtered_auto_keywords!: Observable<string[]>;

  dialogData: AddCampaignDialogResult = {
    name: "",
    keywords: "",
    bid_amount: 0,
    campaign_fund: 0,
    status: false,
    town: Towns.KRAKOW,
    radius: 0,
    canceled: false
  }

  control = new FormControl('')
  addCampaignForm!: FormGroup;

  towns: Towns[] = [];
  selectedTown!: Towns;

  constructor(public reference: MatDialogRef<AddCampaignDialogComponent>) {
    this.addCampaignForm = new FormGroup({
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
    this.towns = Object.values(Towns);
    this.selectedTown = this.towns.at(0)!;
  }

  ngOnInit() {
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.auto_keywords.filter(keyword => this._normalizeValue(keyword).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  closeDialog() {
    this.dialogData.canceled = true;
    this.reference.close(this.dialogData);
  }

  onChange(ob: MatCheckboxChange) {
    this.dialogData.status = ob.checked;
  }

  townChanged(buttonClicked: MatRadioChange) {
    this.selectedTown = buttonClicked.value;
    this.dialogData.town = this.selectedTown;
  }

}
