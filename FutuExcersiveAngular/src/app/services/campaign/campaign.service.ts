import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CampaignDTO} from "../../models/CampaignDTO";
import {AddCampaignDTO} from "../../models/AddCampaignDTO";

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private baseURL = "http://localhost:8080/api/campaigns"

  constructor(private httpClient: HttpClient) { }

  getCampaignList(): Observable<CampaignDTO[]> {
    return this.httpClient.get<CampaignDTO[]>(this.baseURL);
  }

  registerCampaign(newCampaign: AddCampaignDTO): Observable<CampaignDTO> {
    return this.httpClient.post<CampaignDTO>(this.baseURL, newCampaign);
  }

  editCampaign(editedCampaign: CampaignDTO): Observable<CampaignDTO> {
    return this.httpClient.put<CampaignDTO>(this.baseURL, editedCampaign);
  }

  deleteCampaign(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "?id=" + id)
  }


}
