import { Injectable } from '@angular/core';

export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //Sign Up
  signUp(user: User): boolean {
    //1)Fonksiyondan verimiz geliyor.Şimdi bunu locale ekliyelim

    //2)Bunun için bir dizi oluşturalım

    const usersList: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    //3)Tamam şimdi girileni diziye push yapalım
    usersList.push(user);

    //4)Tamam şimdi diziyi set edelim
    localStorage.setItem('users', JSON.stringify(usersList));
    return true;
  }

  //Sign In
  signIn(email: string, password: string): boolean {
    //1)Burada ilk önce kayıtlı diziyi almalıyız
    const usersList: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    //2)Diziyi aldık şimdi içinde aradığımız mail ve password ile eşleşme varsa true döndürelim

    const isThere = usersList.find(
      (data) => data.email === email && data.password === password
    );

    //Burada eşleşme varsa true olan eleman döner döner
    if (isThere) {
      //Şuan kaydolan kullanıcıyı farklı bir yerde tutmalıyız
      localStorage.setItem('nowUser', JSON.stringify(isThere));
      return true;
    }
    return false;
  }
}
