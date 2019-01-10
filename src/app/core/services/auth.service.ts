import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
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
  authorized: BehaviorSubject<Authorization> = new BehaviorSubject({ authorized: false, data: null });

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
          this.authorized.next({
            authorized: true,
            data: result
          });
        });
    });
  }
}
