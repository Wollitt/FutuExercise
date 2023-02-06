import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmeraldAccountDTO} from "../../models/EmeraldAccountDTO";

@Injectable({
  providedIn: 'root'
})
export class EmeraldAccountService {

  private baseURL = "http://localhost:8080/api/account"

  constructor(private httpClient: HttpClient) {}

  getEmeraldAccount(): Observable<EmeraldAccountDTO> {
    return this.httpClient.get<EmeraldAccountDTO>(this.baseURL)
  }
}
