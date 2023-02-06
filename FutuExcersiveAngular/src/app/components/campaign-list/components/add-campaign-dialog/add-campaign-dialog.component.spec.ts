import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampaignDialogComponent } from './add-campaign-dialog.component';

describe('AddCampaignDialogComponent', () => {
  let component: AddCampaignDialogComponent;
  let fixture: ComponentFixture<AddCampaignDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCampaignDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampaignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
