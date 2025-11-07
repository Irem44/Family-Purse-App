import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { FooterComponent } from '../footer/footer.component';
import { DataService } from '../../services/data.service';
import { Data } from '../../models/formdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informations-form',
  imports: [ReactiveFormsModule, PrivateHeaderComponent, FooterComponent],
  templateUrl: './informations-form.component.html',
  styleUrl: './informations-form.component.scss',
})
export class InformationsFormComponent {
  frm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.frm = this.formBuilder.group({
      genelButce: [null],
      maxAsim: [null],
      kategori1: this.formBuilder.group({
        kat1Ad: ['Yeme-İçme'],
        kat1Butce: [null],
        kat1MaxAsim: [null],
      }),
      kategori2: this.formBuilder.group({
        kat2Ad: ['Seyahat'],
        kat2Butce: [null],
        kat2MaxAsim: [null],
      }),
      kategori3: this.formBuilder.group({
        kat3Ad: ['Araç'],
        kat3Butce: [null],
        kat3MaxAsim: [null],
      }),
      kategori4: this.formBuilder.group({
        kat4Ad: ['Eğitim'],
        kat4Butce: [null],
        kat4MaxAsim: [null],
      }),
      kategori5: this.formBuilder.group({
        kat5Ad: ['Sosyal'],
        kat5Butce: [null],
        kat5MaxAsim: [null],
      }),
      kategori6: this.formBuilder.group({
        kat6Ad: ['Fatura'],
        kat6Butce: [null],
        kat6MaxAsim: [null],
      }),
    });
  }

  onSubmit(data: Data) {
    this.dataService.dataAdd(data);
    console.log(this.dataService.list);
    this.router.navigate(['/private-home']);
  }
}
