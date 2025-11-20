import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { DataService } from '../services/data.service';

export class BudgetValidator {
  static genelButceValidator(
    control: AbstractControl,
    dataService: DataService
  ): ValidationErrors | null {
    const form = control as FormGroup;

    const genel = form.get('genelButce')?.value;
    const maxAsim = form.get('maxAsim')?.value;

    const kat1 = form.get('kategori1.kat1Butce')?.value;
    const kat2 = form.get('kategori2.kat2Butce')?.value;
    const kat3 = form.get('kategori3.kat3Butce')?.value;
    const kat4 = form.get('kategori4.kat4Butce')?.value;
    const kat5 = form.get('kategori5.kat5Butce')?.value;
    const kat6 = form.get('kategori6.kat6Butce')?.value;

    if (
      genel < 0 ||
      maxAsim < 0 ||
      kat1 < 0 ||
      kat2 < 0 ||
      kat3 < 0 ||
      kat4 < 0 ||
      kat5 < 0 ||
      kat6 < 0
    ) {
      return { negativeErrors: true };
    }

    const sum = kat1 + kat2 + kat3 + kat4 + kat5 + kat6;

    if (genel + maxAsim < sum) {
      return { budgetExceeded: true };
    }

    return null;
  }
}
