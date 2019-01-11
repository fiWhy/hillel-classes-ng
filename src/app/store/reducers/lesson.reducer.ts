import { Lesson } from 'src/app/core/models/lesson';
import { LessonActions, LessonActionTypes } from '../actions/lesson.actions';


export interface State {
  lesson: Lesson;
  lessons: Lesson[];
}

export const initialState: State = {
  lesson: null,
  lessons: []
};

export function reducer(state = initialState, action: LessonActions): State {
  switch (action.type) {
    case LessonActionTypes.LoadLessons:
      return { lesson: state.lesson, lessons: [] };
    case LessonActionTypes.LoadLessonsSuccess:
      return { lesson: state.lesson, lessons: action.payload };
    case LessonActionTypes.LoadLessonsError:
      return { lesson: state.lesson, lessons: [] };
    case LessonActionTypes.LoadSingleLesson:
      return { lesson: null, lessons: state.lessons };
    case LessonActionTypes.LoadSingleLessonSuccess:
      return { lesson: action.payload, lessons: state.lessons };
    case LessonActionTypes.LoadSingleLessonError:
      return { lesson: null, lessons: state.lessons };
    default:
      return state;
  }
}
