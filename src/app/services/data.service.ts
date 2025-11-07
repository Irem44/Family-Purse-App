import { Injectable } from '@angular/core';
import { Data, reportData } from '../models/formdata.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataList: Data[] = [
    {
      genelButce: 1000,
      maxAsim: 200,
      kategori1: { kat1Ad: 'Yeme-İçme', kat1Butce: 200, kat1MaxAsim: 50 },
      kategori2: { kat2Ad: 'Seyahat', kat2Butce: 150, kat2MaxAsim: 30 },
      kategori3: { kat3Ad: 'Araç', kat3Butce: 120, kat3MaxAsim: 20 },
      kategori4: { kat4Ad: 'Eğitim', kat4Butce: 80, kat4MaxAsim: 10 },
      kategori5: { kat5Ad: 'Sosyal', kat5Butce: 90, kat5MaxAsim: 20 },
      kategori6: { kat6Ad: 'Fatura', kat6Butce: 60, kat6MaxAsim: 15 },
    },
  ];

  public reportDataList: reportData[] = [
    // {
    //   name: 'Yeme-İçme',
    //   kalanButce: 200,
    //   dusenMiktar: 50,
    // },
  ];

  dataAdd(item: Data) {
    this.dataList.push(item);
  }

  get list(): Data[] {
    return this.dataList;
  }

  addReport(name: any, date: any, kalan: any, dusen: any) {
    const data: reportData = {
      name: name,
      reportDate: date,
      kalanButce: kalan,
      dusenMiktar: dusen,
    };
    this.reportDataList.push(data);
  }
  get reportList(): reportData[] {
    return this.reportDataList;
  }

  get reportDate() {
    const date = new Date();

    return date.toLocaleString('tr-TR');
  }
}
