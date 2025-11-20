import { Component, Type } from '@angular/core';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { reportData } from '../../models/formdata.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-private-home',
  imports: [
    PrivateHeaderComponent,
    FooterComponent,
    NgIf,
    NgFor,
    FormsModule,
    MatSnackBarModule,
  ],
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
  kat1ToggleDisabled: any = false;
  kat2ToggleDisabled: any = false;
  kat3ToggleDisabled: any = false;
  kat4ToggleDisabled: any = false;
  kat5ToggleDisabled: any = false;
  kat6ToggleDisabled: any = false;
  kat1DusDisabled: any = false;
  kat2DusDisabled: any = false;
  kat3DusDisabled: any = false;
  kat4DusDisabled: any = false;
  kat5DusDisabled: any = false;
  kat6DusDisabled: any = false;

  constructor(
    private router: Router,
    public dataService: DataService,
    private snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Kapat', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });
  }
  inf() {
    this.router.navigate(['/info']);
  }

  // Changing
  toggleGButce() {
    this.toggleGenelButce = !this.toggleGenelButce;
    this.dataService.list.forEach((x) => {
      x.genelButce = this.newGButce;
    });
  }

  toggleKat1ButceFnc() {
    this.toggleKat1Butce = !this.toggleKat1Butce;
    this.kat1DusDisabled = true;

    this.dataService.list.forEach((x) => {
      if (this.newKat1Butce != undefined) {
        const kat1 = x.kategori1.kat1Butce;
        x.kategori1.kat1Butce = this.newKat1Butce;

        if (kat1 < this.newKat1Butce) {
          const sb = this.newKat1Butce - kat1;
          x.genelButce = x.genelButce - sb;
        } else {
          const sb = kat1 - this.newKat1Butce;
          x.genelButce = x.genelButce + sb;
        }
        this.kat1DusDisabled = false;
      }
    });
  }
  toggleKat2ButceFnc() {
    this.toggleKat2Butce = !this.toggleKat2Butce;
    this.kat2DusDisabled = true;

    this.dataService.list.forEach((x) => {
      if (this.newKat2Butce != undefined) {
        const kat2 = x.kategori2.kat2Butce;
        x.kategori2.kat2Butce = this.newKat2Butce;

        if (kat2 < this.newKat2Butce) {
          const sb = this.newKat2Butce - kat2;
          x.genelButce = x.genelButce - sb;
        } else {
          const sb = kat2 - this.newKat2Butce;
          x.genelButce = x.genelButce + sb;
        }
        this.kat2DusDisabled = false;
      }
    });
  }
  toggleKat3ButceFnc() {
    this.toggleKat3Butce = !this.toggleKat3Butce;
    this.kat3DusDisabled = true;

    this.dataService.list.forEach((x) => {
      if (this.newKat3Butce != undefined) {
        const kat3 = x.kategori3.kat3Butce;
        x.kategori3.kat3Butce = this.newKat3Butce;

        if (kat3 < this.newKat3Butce) {
          const sb = this.newKat3Butce - kat3;
          x.genelButce = x.genelButce - sb;
        } else {
          const sb = kat3 - this.newKat3Butce;
          x.genelButce = x.genelButce + sb;
        }
        this.kat3DusDisabled = false;
      }
    });
  }
  toggleKat4ButceFnc() {
    this.toggleKat4Butce = !this.toggleKat4Butce;
    this.kat4DusDisabled = true;

    this.dataService.list.forEach((x) => {
      if (this.newKat4Butce != undefined) {
        const kat4 = x.kategori4.kat4Butce;
        x.kategori4.kat4Butce = this.newKat4Butce;

        if (kat4 < this.newKat4Butce) {
          const sb = this.newKat4Butce - kat4;
          x.genelButce = x.genelButce - sb;
        } else {
          const sb = kat4 - this.newKat4Butce;
          x.genelButce = x.genelButce + sb;
        }
        this.kat4DusDisabled = false;
      }
    });
  }
  toggleKat5ButceFnc() {
    this.toggleKat5Butce = !this.toggleKat5Butce;
    this.kat5DusDisabled = true;

    this.dataService.list.forEach((x) => {
      if (this.newKat5Butce != undefined) {
        const kat5 = x.kategori5.kat5Butce;
        x.kategori5.kat5Butce = this.newKat5Butce;

        if (kat5 < this.newKat5Butce) {
          const sb = this.newKat5Butce - kat5;
          x.genelButce = x.genelButce - sb;
        } else {
          const sb = kat5 - this.newKat5Butce;
          x.genelButce = x.genelButce + sb;
        }
        this.kat5DusDisabled = false;
      }
    });
  }
  toggleKat6ButceFnc() {
    this.toggleKat6Butce = !this.toggleKat6Butce;
    this.kat6DusDisabled = true;

    this.dataService.list.forEach((x) => {
      if (this.newKat6Butce != undefined) {
        const kat6 = x.kategori6.kat6Butce;
        x.kategori6.kat6Butce = this.newKat6Butce;

        if (kat6 < this.newKat6Butce) {
          const sb = this.newKat6Butce - kat6;
          x.genelButce = x.genelButce - sb;
        } else {
          const sb = kat6 - this.newKat6Butce;
          x.genelButce = x.genelButce + sb;
        }
        this.kat6DusDisabled = false;
      }
    });
  }

  //Decrease

  dusKat1() {
    this.butceDusKat1 = !this.butceDusKat1;
    this.kat1ToggleDisabled = true;

    if (!this.butceDusKat1) {
      this.dataService.list.forEach((x) => {
        if (this.yemeIcme >= 0) {
          if (x.kategori1.kat1Butce >= this.yemeIcme) {
            x.kategori1.kat1Butce -= this.yemeIcme;
            x.genelButce -= this.yemeIcme;
            this.dataService.addReport(
              x.kategori1.kat1Ad,
              this.dataService.reportDate,
              x.kategori1.kat1Butce,
              this.yemeIcme
            );
          } else {
            this.openSnackBar('Olan Bütçeden Fazla Düşme Yapamazsınız');
          }
          if (x.kategori1.kat1Butce == 0) {
            this.openSnackBar(
              `Bu ay ${x.kategori1.kat1Ad} için ayırdığınız bütçe bitmiştir`
            );
          }
        } else if (this.yemeIcme < 0) {
          this.openSnackBar('Negatif Değer Girdiniz');
        }

        this.kat1ToggleDisabled = false;
      });
    }
  }
  dusKat2() {
    this.butceDusKat2 = !this.butceDusKat2;
    this.kat2ToggleDisabled = true;
    if (!this.butceDusKat2) {
      this.dataService.list.forEach((x) => {
        if (this.seyahat >= 0) {
          if (x.kategori2.kat2Butce >= this.seyahat) {
            x.kategori2.kat2Butce -= this.seyahat;
            x.genelButce -= this.seyahat;
            this.dataService.addReport(
              x.kategori2.kat2Ad,
              this.dataService.reportDate,
              x.kategori2.kat2Butce,
              this.seyahat
            );
          } else {
            this.openSnackBar('Olan Bütçeden Fazla Düşme Yapamazsınız');
          }
          if (x.kategori2.kat2Butce == 0) {
            this.openSnackBar(
              `Bu ay ${x.kategori2.kat2Ad} için ayırdığınız bütçe bitmiştir`
            );
          }
        } else if (this.seyahat < 0) {
          this.openSnackBar('Negatif Değer Girdiniz');
        }

        this.kat2ToggleDisabled = false;
      });
    }
  }
  dusKat3() {
    this.butceDusKat3 = !this.butceDusKat3;
    this.kat3ToggleDisabled = true;

    if (!this.butceDusKat3) {
      this.dataService.list.forEach((x) => {
        if (this.arac >= 0) {
          if (x.kategori3.kat3Butce >= this.arac) {
            x.kategori3.kat3Butce -= this.arac;
            x.genelButce -= this.arac;
            this.dataService.addReport(
              x.kategori3.kat3Ad,
              this.dataService.reportDate,
              x.kategori3.kat3Butce,
              this.arac
            );
          } else {
            this.openSnackBar('Olan Bütçeden Fazla Düşme Yapamazsınız');
          }
          if (x.kategori3.kat3Butce == 0) {
            this.openSnackBar(
              `Bu ay ${x.kategori3.kat3Ad} için ayırdığınız bütçe bitmiştir`
            );
          }
        } else if (this.arac < 0) {
          this.openSnackBar('Negatif Değer Girdiniz');
        }

        this.kat3ToggleDisabled = false;
      });
    }
  }
  dusKat4() {
    this.butceDusKat4 = !this.butceDusKat4;
    this.kat4ToggleDisabled = true;

    if (!this.butceDusKat4) {
      this.dataService.list.forEach((x) => {
        if (this.egitim >= 0) {
          if (x.kategori4.kat4Butce >= this.egitim) {
            x.kategori4.kat4Butce -= this.egitim;
            x.genelButce -= this.egitim;
            this.dataService.addReport(
              x.kategori4.kat4Ad,
              this.dataService.reportDate,
              x.kategori4.kat4Butce,
              this.egitim
            );
          } else {
            this.openSnackBar('Olan Bütçeden Fazla Düşme Yapamazsınız');
          }
          if (x.kategori4.kat4Butce == 0) {
            this.openSnackBar(
              `Bu ay ${x.kategori4.kat4Ad} için ayırdığınız bütçe bitmiştir`
            );
          }
        } else if (this.egitim < 0) {
          this.openSnackBar('Negatif Değer Girdiniz');
        }
        this.kat4ToggleDisabled = false;
      });
    }
  }
  dusKat5() {
    this.butceDusKat5 = !this.butceDusKat5;
    this.kat5ToggleDisabled = true;

    if (!this.butceDusKat5) {
      this.dataService.list.forEach((x) => {
        if (this.sosyal >= 0) {
          if (x.kategori5.kat5Butce >= this.sosyal) {
            x.kategori5.kat5Butce -= this.sosyal;
            x.genelButce -= this.sosyal;
            this.dataService.addReport(
              x.kategori5.kat5Ad,
              this.dataService.reportDate,
              x.kategori5.kat5Butce,
              this.sosyal
            );
          } else {
            this.openSnackBar('Olan Bütçeden Fazla Düşme Yapamazsınız');
          }
          if (x.kategori5.kat5Butce == 0) {
            this.openSnackBar(
              `Bu ay ${x.kategori5.kat5Ad} için ayırdığınız bütçe bitmiştir`
            );
          }
        } else if (this.sosyal < 0) {
          this.openSnackBar('Negatif Değer Girdiniz');
        }

        this.kat5ToggleDisabled = false;
      });
    }
  }
  dusKat6() {
    this.butceDusKat6 = !this.butceDusKat6;
    this.kat6ToggleDisabled = true;

    if (!this.butceDusKat6) {
      this.dataService.list.forEach((x) => {
        if (this.fatura >= 0) {
          if (x.kategori6.kat6Butce >= this.fatura) {
            x.kategori6.kat6Butce -= this.fatura;
            x.genelButce -= this.fatura;
            this.dataService.addReport(
              x.kategori6.kat6Ad,
              this.dataService.reportDate,
              x.kategori6.kat6Butce,
              this.fatura
            );
          } else {
            this.openSnackBar('Olan Bütçeden Fazla Düşme Yapamazsınız');
          }
          if (x.kategori6.kat6Butce == 0) {
            this.openSnackBar(
              `Bu ay ${x.kategori6.kat6Ad} için ayırdığınız bütçe bitmiştir`
            );
          }
        } else if (this.fatura < 0) {
          this.openSnackBar('Negatif Değer Girdiniz');
        }
        this.kat6ToggleDisabled = false;
      });
    }
  }
}
