import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScanReportService {

  url: string = "https://www.virustotal.com/vtapi/v2/file/report";
  params = new HttpParams()
    .set("apikey", "7498f018f4cd4d83414d8822a96f74cc900f6d9f91350f6c4885ed9eb8f62fa3")
    .set("resource", "0c45a2be9075433f90bfcb72200a2d1d40e033326abd450a35b97b051c9129bc");
  constructor(private http: HttpClient) {
  }
  public getScanReport(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: this.params
    };

    return this.http.get(this.url, httpOptions);
  }

  public getMockScanReport(): Observable<any> {
    return this.http.get("./assets/json/Scanreport.json");
  }


}
