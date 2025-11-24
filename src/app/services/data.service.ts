import { Injectable } from '@angular/core';
import { Data, reportData } from '../models/formdata.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // public dataList: Data[] = [
  //   {
  //     genelButce: 1000,
  //     maxAsim: 200,
  //     kategori1: { kat1Ad: 'Yeme-İçme', kat1Butce: 20 },
  //     kategori2: { kat2Ad: 'Seyahat', kat2Butce: 15 },
  //     kategori3: { kat3Ad: 'Araç', kat3Butce: 12 },
  //     kategori4: { kat4Ad: 'Eğitim', kat4Butce: 8 },
  //     kategori5: { kat5Ad: 'Sosyal', kat5Butce: 9 },
  //     kategori6: { kat6Ad: 'Fatura', kat6Butce: 6 },
  //   },
  // ];

  public reportDataList: reportData[] = [
    // {
    //   name: 'Yeme-İçme',
    //   kalanButce: 200,
    //   dusenMiktar: 50,
    // },
  ];

  dataAdd(item: Data) {
    const allData: Data[] = JSON.parse(
      localStorage.getItem('dataList') || '[]'
    );

    allData.push(item);
    localStorage.setItem('dataList', JSON.stringify(allData));
    // this.dataList.push(item);
  }

  get list(): Data[] {
    // return this.dataList;

    return JSON.parse(localStorage.getItem('dataList') || '[]');
  }

  addReport(name: any, date: any, kalan: any, dusen: any) {
    const data: reportData = {
      name: name,
      reportDate: date,
      kalanButce: kalan,
      dusenMiktar: dusen,
    };
    const allReport: reportData[] = JSON.parse(
      localStorage.getItem('allReport') || '[]'
    );
    allReport.push(data);
    localStorage.setItem('allReport', JSON.stringify(allReport));
    // this.reportDataList.push(data);
  }
  get reportList(): reportData[] {
    return JSON.parse(localStorage.getItem('allReport') || '[]');
  }

  get reportDate() {
    const now = new Date();
    const date = now.toLocaleDateString('tr-TR');
    const time = now.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return [date, time];
  }
}
