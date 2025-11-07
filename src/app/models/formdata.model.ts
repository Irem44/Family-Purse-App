export interface Data {
  genelButce: number;
  maxAsim: number;
  kategori1: {
    kat1Ad: string;
    kat1Butce: number;
    kat1MaxAsim: number;
  };
  kategori2: {
    kat2Ad: string;
    kat2Butce: number;
    kat2MaxAsim: number;
  };
  kategori3: {
    kat3Ad: string;
    kat3Butce: number;
    kat3MaxAsim: number;
  };
  kategori4: {
    kat4Ad: string;
    kat4Butce: number;
    kat4MaxAsim: number;
  };
  kategori5: {
    kat5Ad: string;
    kat5Butce: number;
    kat5MaxAsim: number;
  };
  kategori6: {
    kat6Ad: string;
    kat6Butce: number;
    kat6MaxAsim: number;
  };
}

export interface reportData {
  name: string;
  reportDate: string;
  kalanButce: number;
  dusenMiktar: number;
}
