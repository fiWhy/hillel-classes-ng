import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularFire2/database';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { LessonTopic } from '../models/lesson-topic';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private lessonsCollection = this.afs.collection('lessons');
  private topicsCollection = this.afs.collection('lesson-topics');

  lessons$ = this.lessonsCollection.snapshotChanges();
  topics$ = this.topicsCollection.snapshotChanges()
    .pipe(
      map(data => this.convertSnapshot<LessonTopic>(data))
    );

  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore
  ) { }

  updateTopics(data: LessonTopic) {
    this.topicsCollection.doc(data.id).update({ ...data });
  }

  private convertSnapshot<T>(sh: DocumentChangeAction<any>[]): T[] {
    return sh.map(s => ({
      id: s.payload.doc.id,
      ...s.payload.doc.data()
    }));
  }
}
