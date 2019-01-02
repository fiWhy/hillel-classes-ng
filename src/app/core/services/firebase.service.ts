import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularFire2/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private lessonsCollection = this.afs.collection('lessons');
  private topicsCollection = this.afs.collection('lesson-topics');

  lessons$ = this.lessonsCollection.valueChanges();
  topics$ = this.topicsCollection.valueChanges();

  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore
  ) { }

}
