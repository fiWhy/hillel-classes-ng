import { TestBed } from '@angular/core/testing';

import { LessonFirebaseService } from './lesson-firebase.service';

describe('LessonFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonFirebaseService = TestBed.get(LessonFirebaseService);
    expect(service).toBeTruthy();
  });
});
