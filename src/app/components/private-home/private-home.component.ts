import { Component, Type } from '@angular/core';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { reportData } from '../../models/formdata.model';

@Component({
  selector: 'app-private-home',
  imports: [PrivateHeaderComponent, FooterComponent, NgIf, NgFor, FormsModule],
  templateUrl: './private-home.component.html',
  styleUrl: './private-home.component.scss',
})
export class PrivateHomeComponent {
  toggleGenelButce: boolean = false;
  toggleKat1Butce: boolean = false;
  toggleKat2Butce: boolean = false;
  toggleKat3Butce: boolean = false;
  toggleKat4Butce: boolean = false;
  toggleKat5Butce: boolean = false;
  toggleKat6Butce: boolean = false;
  newGButce: any;
  newKat1Butce: any;
  newKat2Butce: any;
  newKat3Butce: any;
  newKat4Butce: any;
  newKat5Butce: any;
  newKat6Butce: any;
  butceDusKat1: boolean = false;
  butceDusKat2: boolean = false;
  butceDusKat3: boolean = false;
  butceDusKat4: boolean = false;
  butceDusKat5: boolean = false;
  butceDusKat6: boolean = false;
  yemeIcme: any;
  seyahat: any;
  arac: any;
  egitim: any;
  sosyal: any;
  fatura: any;

  constructor(private router: Router, public dataService: DataService) {}

  inf() {
    this.router.navigate(['/info']);
  }

  toggleGButce() {
    this.toggleGenelButce = !this.toggleGenelButce;
    this.dataService.list.forEach((x) => {
      x.genelButce = this.newGButce;
    });
  }

  toggleKat1ButceFnc() {
    this.toggleKat1Butce = !this.toggleKat1Butce;

    this.dataService.list.forEach((x) => {
      x.kategori1.kat1Butce = this.newKat1Butce;
    });
  }
  toggleKat2ButceFnc() {
    this.toggleKat2Butce = !this.toggleKat2Butce;

    this.dataService.list.forEach((x) => {
      x.kategori2.kat2Butce = this.newKat2Butce;
    });
  }
  toggleKat3ButceFnc() {
    this.toggleKat3Butce = !this.toggleKat3Butce;

    this.dataService.list.forEach((x) => {
      x.kategori3.kat3Butce = this.newKat3Butce;
    });
  }
  toggleKat4ButceFnc() {
    this.toggleKat4Butce = !this.toggleKat4Butce;

    this.dataService.list.forEach((x) => {
      x.kategori4.kat4Butce = this.newKat4Butce;
    });
  }
  toggleKat5ButceFnc() {
    this.toggleKat5Butce = !this.toggleKat5Butce;

    this.dataService.list.forEach((x) => {
      x.kategori5.kat5Butce = this.newKat5Butce;
    });
  }
  toggleKat6ButceFnc() {
    this.toggleKat6Butce = !this.toggleKat6Butce;

    this.dataService.list.forEach((x) => {
      x.kategori6.kat6Butce = this.newKat6Butce;
    });
  }

  dusKat1() {
    this.butceDusKat1 = !this.butceDusKat1;

    if (!this.butceDusKat1) {
      this.dataService.list.forEach((x) => {
        x.kategori1.kat1Butce -= this.yemeIcme;
        this.dataService.addReport(
          x.kategori1.kat1Ad,
          this.dataService.reportDate,
          x.kategori1.kat1Butce,
          this.yemeIcme
        );
      });
    }
  }
  dusKat2() {
    this.butceDusKat2 = !this.butceDusKat2;
    if (!this.butceDusKat2) {
      this.dataService.list.forEach((x) => {
        x.kategori2.kat2Butce -= this.seyahat;
        this.dataService.addReport(
          x.kategori2.kat2Ad,
          this.dataService.reportDate,
          x.kategori2.kat2Butce,
          this.seyahat
        );
      });
    }
  }
  dusKat3() {
    this.butceDusKat3 = !this.butceDusKat3;
    if (!this.butceDusKat3) {
      this.dataService.list.forEach((x) => {
        x.kategori3.kat3Butce -= this.arac;
        this.dataService.addReport(
          x.kategori3.kat3Ad,
          this.dataService.reportDate,
          x.kategori3.kat3Butce,
          this.arac
        );
      });
    }
  }
  dusKat4() {
    this.butceDusKat4 = !this.butceDusKat4;
    if (!this.butceDusKat4) {
      this.dataService.list.forEach((x) => {
        x.kategori4.kat4Butce -= this.egitim;

        this.dataService.addReport(
          x.kategori4.kat4Ad,
          this.dataService.reportDate,
          x.kategori4.kat4Butce,
          this.egitim
        );
      });
    }
  }
  dusKat5() {
    this.butceDusKat5 = !this.butceDusKat5;
    if (!this.butceDusKat5) {
      this.dataService.list.forEach((x) => {
        x.kategori5.kat5Butce -= this.sosyal;
        this.dataService.addReport(
          x.kategori5.kat5Ad,
          this.dataService.reportDate,
          x.kategori5.kat5Butce,
          this.sosyal
        );
      });
    }
  }
  dusKat6() {
    this.butceDusKat6 = !this.butceDusKat6;
    if (!this.butceDusKat6) {
      this.dataService.list.forEach((x) => {
        x.kategori6.kat6Butce -= this.fatura;
        this.dataService.addReport(
          x.kategori6.kat6Ad,
          this.dataService.reportDate,
          x.kategori6.kat6Butce,
          this.fatura
        );
      });
    }
  }
}
