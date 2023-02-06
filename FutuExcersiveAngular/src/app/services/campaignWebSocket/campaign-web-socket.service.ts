import { Injectable } from '@angular/core';
import {map, Observable, share, Subject} from "rxjs";
import {CampaignDTO} from "../../models/CampaignDTO";
import {RxStomp} from "@stomp/rx-stomp";

@Injectable({
  providedIn: 'root'
})
export class CampaignWebSocketService {

  newCampaign: Observable<CampaignDTO> = new Subject();
  editedQuestion: Observable<CampaignDTO> = new Subject();
  deletedQuestion: Observable<CampaignDTO> = new Subject()

  constructor(private stomp: RxStomp) {
    this.newCampaign = stomp.watch('/topic/campaigns/created')
      .pipe(
        map(message => JSON.parse(message.body)),
        share({resetOnRefCountZero: true})
      );
    this.editedQuestion = stomp.watch('/topic/campaigns/edited')
      .pipe(
        map(message => JSON.parse(message.body)),
        share({resetOnRefCountZero: true})
      );
    this.deletedQuestion = stomp.watch('/topic/campaigns/deleted')
      .pipe(
        map(message => JSON.parse(message.body)),
        share({resetOnRefCountZero: true})
      );
  }
}
