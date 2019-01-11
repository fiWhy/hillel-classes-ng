import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentChangeAction, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { map, mergeMap } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';
import { Lesson } from '../models/lesson';
import { Observable } from 'rxjs';
import { Material } from '../models/material';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class LessonFirebaseService {
  private lessonsCollection = this.afs.collection('lessons');

  lessons$ = this.lessonsCollection.snapshotChanges()
    .pipe(
      map(data => FirebaseService.convertSnapshot<Lesson>(data))
    );

  constructor(
    private afs: AngularFirestore
  ) { }

  private getMaterialCollection(lesson: Lesson) {
    return this.lessonsCollection.doc(lesson.id).collection('materials');
  }

  private getTopicsCollection(lesson: Lesson) {
    return this.lessonsCollection.doc(lesson.id).collection('topics');
  }

  static accumulateLessonTopicsMaterials(topics: Topic[]) {
    return topics.reduce((acc, topic) =>
      acc.concat(LessonFirebaseService.accumulateMaterials(topic))
      , []);
  }

  static accumulateMaterials(topic: Topic) {
    return topic.data.reduce((acc, next) => acc.concat(next.articles), []);
  }


  getLesson(lesson: Lesson): AngularFirestoreDocument<Lesson> {
    return this.lessonsCollection.doc(lesson.id);
  }

  getTopic(topic: Topic) {
    return this.getTopicsCollection(topic.lesson).doc(topic.id);
  }

  updateLesson(lesson: Lesson) {
    return this.getLesson(lesson).update(lesson.toPlainObject());
  }

  updateTopic(topic: Topic) {
    return this.getTopicsCollection(topic.lesson).doc(topic.id).update(topic.toPlainObject());
  }

  getLessonMaterials(lesson: Lesson): Observable<Material[]> {
    return this.getMaterialCollection(lesson).snapshotChanges().pipe(
      map(data => FirebaseService.convertSnapshot<Material>(data)),
      map(data => data.map(el => new Material(el)))
    );
  }

  getTopics(lesson: Lesson) {
    return this.getTopicsCollection(lesson).snapshotChanges().pipe(
      map(data => FirebaseService.convertSnapshot<Topic>(data)),
      map(data => data.map(el => new Topic(el, lesson)))
    );
  }

  getTopicMaterials(topic: Topic) {
    return LessonFirebaseService.accumulateMaterials(topic);
  }

}
