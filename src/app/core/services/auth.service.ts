import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { auth } from 'firebase';

export interface Authorization {
  authorized: boolean;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = auth();
  authorized: Subject<Authorization> = new Subject();

  constructor() {
    this.firebaseAuth.onAuthStateChanged((user: any) => {
      const data = { data: user, authorized: Boolean(user) };
      this.authorized.next(data);
    });
  }

  google(scope = 'https://www.googleapis.com/auth/firebase') {
    return Observable.create(observer => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope(scope);
      this.firebaseAuth.signInWithPopup(provider)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
          this.authorized.next(result);
        });
    });
  }
}
