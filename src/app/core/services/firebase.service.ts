import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentChange, Action } from '@angular/fire/firestore';
import { Topic } from '../models/topic';
import { map } from 'rxjs/operators';
import { Lesson } from '../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private lessonsCollection = this.afs.collection('lessons');
  private topicsCollection = this.afs.collection('lesson-topics');
  private materialsCollection = this.afs.collection('materials');

  lessons$ = this.lessonsCollection.snapshotChanges()
    .pipe(
      map(data => FirebaseService.convertSnapshot<Lesson>(data))
    );

  topics$ = this.topicsCollection.snapshotChanges()
    .pipe(
      map(data => FirebaseService.convertSnapshot<Topic>(data))
    )

  materials$ = this.materialsCollection.snapshotChanges()
    .pipe(
      map(data => FirebaseService.convertSnapshot(data))
    )

  constructor(
    private afs: AngularFirestore
  ) { }

  public static convertSnapshot<T>(sh: DocumentChangeAction<any>[]): T[] {
    return sh.map(s => FirebaseService.convertSingleDoc<T>(s));
  }

  public static convertWithoutDoc<T>(d: Action<any>): T {
    return {
      ...d.payload.data(),
      id: d.payload.id,
    }
  }

  public static convertSingleDoc<T>(d: DocumentChangeAction<any>): T {
    return {
      ...d.payload.doc.data(),
      id: d.payload.doc.id,
    }
  }

  updateTopics(data: Topic) {
    this.topicsCollection.doc(data.id).update({ ...data });
  }

  getMaterials() {
    this.materialsCollection.get()
  }
}
