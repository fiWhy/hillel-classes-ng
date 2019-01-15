import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { FirebaseService } from './firebase.service';
import { Lesson } from '../models/lesson';
import { Observable, of, from } from 'rxjs';
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


  getLesson(lessonId: string): AngularFirestoreDocument<Lesson> {
    return this.lessonsCollection.doc(lessonId);
  }

  getLessonChanges(lessonId: string) {
    return this.getLesson(lessonId).snapshotChanges()
      .pipe(
        map((lesson: any) => FirebaseService.convertWithoutDoc<Lesson>(lesson)),
        map((lesson: Lesson) => new Lesson(lesson))
      )
  }

  getTopic(topic: Topic) {
    return this.getTopicsCollection(topic.lesson).doc(topic.id);
  }

  updateLesson(lesson: Lesson) {
    return from(this.getLesson(lesson.id).update(lesson.toPlainObject()));
  }

  createLesson(lesson: Lesson) {
    return from(this.lessonsCollection.doc(lesson.id).set(lesson.toPlainObject()));
  }

  updateTopic(topic: Topic) {
    return this.getTopicsCollection(topic.lesson).doc(topic.id).update(topic.toPlainObject());
  }

  addTopic(topic: Topic) {
    return this.getTopicsCollection(topic.lesson).doc(topic.id).set(topic.toPlainObject());
  }

  deleteTopic(topic: Topic) {
    return this.getTopicsCollection(topic.lesson).doc(topic.id).delete();
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
