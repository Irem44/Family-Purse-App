export interface Data {
  genelButce: number;
  maxAsim: number;
  kategori1: {
    kat1Ad: string;
    kat1Butce: number;
  };
  kategori2: {
    kat2Ad: string;
    kat2Butce: number;
  };
  kategori3: {
    kat3Ad: string;
    kat3Butce: number;
  };
  kategori4: {
    kat4Ad: string;
    kat4Butce: number;
  };
  kategori5: {
    kat5Ad: string;
    kat5Butce: number;
  };
  kategori6: {
    kat6Ad: string;
    kat6Butce: number;
  };
}

export interface reportData {
  name: string;
  reportDate: string;
  kalanButce: number;
  dusenMiktar: number;
}
