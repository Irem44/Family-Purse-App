import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { FooterComponent } from '../footer/footer.component';
import { DataService } from '../../services/data.service';
import { Data } from '../../models/formdata.model';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BudgetValidator } from '../../validators/budget.validators';

@Component({
  selector: 'app-informations-form',
  imports: [
    ReactiveFormsModule,
    PrivateHeaderComponent,
    FooterComponent,

    MatSnackBarModule,
  ],
  templateUrl: './informations-form.component.html',
  styleUrl: './informations-form.component.scss',
})
export class InformationsFormComponent {
  frm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.frm = this.formBuilder.group(
      {
        genelButce: [null],
        maxAsim: [null],
        kategori1: this.formBuilder.group({
          kat1Ad: ['Yeme-İçme'],
          kat1Butce: [null],
        }),
        kategori2: this.formBuilder.group({
          kat2Ad: ['Seyahat'],
          kat2Butce: [null],
        }),
        kategori3: this.formBuilder.group({
          kat3Ad: ['Araç'],
          kat3Butce: [null],
        }),
        kategori4: this.formBuilder.group({
          kat4Ad: ['Eğitim'],
          kat4Butce: [null],
        }),
        kategori5: this.formBuilder.group({
          kat5Ad: ['Sosyal'],
          kat5Butce: [null],
        }),
        kategori6: this.formBuilder.group({
          kat6Ad: ['Fatura'],
          kat6Butce: [null],
        }),
      },
      { validator: [BudgetValidator.genelButceValidator] }
    );
  }

  onSubmit(data: Data) {
    if (this.frm.errors?.['budgetExceeded']) {
      this.openSnackBar('Forma Geçerli Bir Genel Bütçe Giriniz');
      return;
    }
    if (this.frm.errors?.['negativeErrors']) {
      this.openSnackBar('Forma negatif değerler girmeyiniz');
      return;
    }

    const remain =
      data.genelButce +
      data.maxAsim -
      (data.kategori1.kat1Butce +
        data.kategori2.kat2Butce +
        data.kategori3.kat3Butce +
        data.kategori4.kat4Butce +
        data.kategori5.kat5Butce +
        data.kategori6.kat6Butce);
    data.genelButce = remain;
    this.dataService.dataAdd(data);
    this.router.navigate(['/private-home']);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Kapat', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
