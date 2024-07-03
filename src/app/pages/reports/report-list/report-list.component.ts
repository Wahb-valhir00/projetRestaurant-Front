import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/services/report.service';
import { Report } from '../../../services/models/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrl: './report-list.component.scss'
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getAllReports().subscribe(reports => {
      this.reports=reports;
    });
  }

  

 
  deleteReports(id: string): void {
    this.reportService.deleteReports(id).subscribe(() => {
      this.reports = this.reports.filter(reports=> reports.id !== id);
    });
  }
}
