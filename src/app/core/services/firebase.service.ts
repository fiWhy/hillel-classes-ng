import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularFire2/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  lessons = this.db.list('/lessons');
  topics = this.db.list('/lesson-topics');
  constructor(private db: AngularFireDatabase) { }
}
