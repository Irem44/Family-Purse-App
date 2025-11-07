import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-report',
  imports: [NgFor, FooterComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent {
  data: any;

  constructor(public dataService: DataService) {
    this.data = this.dataService.reportList;
  }
}
