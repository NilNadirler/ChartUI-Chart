import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private httpClient: HttpClient) { }

    apiUrl = "http://localhost:9090/api/chart";

    public getChartData():Observable<any[]>{

      return this.httpClient.get<any[]>(`${this.apiUrl}/findAll`)
    }
  
}
