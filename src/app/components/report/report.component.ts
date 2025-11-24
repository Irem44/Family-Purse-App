import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report',
  imports: [NgFor, FooterComponent, NgIf, FormsModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss',
})
export class ReportComponent {
  data: any;
  searchData = '';

  constructor(public dataService: DataService) {
    this.data = this.dataService.reportList;
  }

  onSearchChange() {
    const reportAnalysis = this.dataService.reportList.filter((filteredData) =>
      filteredData.name.toUpperCase().includes(this.searchData.toUpperCase())
    );

    this.data = reportAnalysis;
  }
}
