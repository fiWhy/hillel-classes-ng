import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { LessonTopic } from '../models/lesson-topic';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private lessonsCollection = this.afs.collection('lessons');
  private topicsCollection = this.afs.collection('lesson-topics');
  private materialsCollection = this.afs.collection('materials');

  lessons$ = this.lessonsCollection.snapshotChanges();
  topics$ = this.topicsCollection.snapshotChanges()
    .pipe(
      map(data => FirebaseService.convertSnapshot<LessonTopic>(data))
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

  public static convertSingleDoc<T>(d: DocumentChangeAction<any>): T {
    return {
      id: d.payload.doc.id,
      ...d.payload.doc.data()
    }
  }

  updateTopics(data: LessonTopic) {
    this.topicsCollection.doc(data.id).update({ ...data });
  }

  getMaterials() {
    this.materialsCollection.get()
  }
}
