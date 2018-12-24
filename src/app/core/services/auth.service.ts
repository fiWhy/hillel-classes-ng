import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  google(scope = 'https://www.googleapis.com/auth/firebase') {
    return Observable.create(observer => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope(scope);
      auth().signInWithPopup(provider)
        .then((result: any) => {
          observer.next(result)
          observer.complete();
        })
    })
  }
}
