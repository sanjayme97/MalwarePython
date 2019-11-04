import { Component, OnInit, ChangeDetectionStrategy, AfterContentChecked } from '@angular/core';
import { ScanReportService } from '../core/Report/scan-report.service';

@Component({
  selector: 'app-scan-report',
  templateUrl: './scan-report.component.html',
  styleUrls: ['./scan-report.component.scss']
})
export class ScanReportComponent implements OnInit,AfterContentChecked {

  reports: any = {};
  scans: any[];
  percentage:any = 0;
  constructor(private report: ScanReportService) { 
    
    
  }

  ngOnInit() {
    this.report.getMockScanReport().subscribe((data) => {
      this.reports = data;
      this.scans = Object.keys(data.scans).map(function (key) {
        return {
          name: key,
          status: data.scans[key]
        };
      });
      this.percentage = (this.scans.filter(x=>x.status.detected==false).length/this.scans.length)*100;
    })
  }


  ngAfterContentChecked() {

  }



}
