import { Lesson } from 'src/app/core/models/lesson';
import { LessonActions, LessonActionTypes } from '../actions/lesson.actions';
import { StoreResponse, ResponseType, StorePending } from 'src/app/core/models/response';


export interface State {
  lesson: StoreResponse<Lesson>;
  lessons: StoreResponse<Lesson[]>;
}

export const initialState: State = {
  lesson: new StoreResponse(null, null, null),
  lessons: new StoreResponse([], null, null)
};

export function reducer(state = initialState, action: LessonActions): State {
  switch (action.type) {
    case LessonActionTypes.LoadLessons:
      return { lesson: state.lesson, lessons: new StorePending<Lesson[]>(state.lessons.data, state.lessons.error) };
    case LessonActionTypes.LoadLessonsSuccess:
      return { lesson: state.lesson, lessons: action.payload };
    case LessonActionTypes.LoadLessonsError:
      return { lesson: state.lesson, lessons: action.payload };
    case LessonActionTypes.LoadSingleLesson:
      return { lesson: new StorePending<Lesson>(null, state.lesson.error), lessons: state.lessons };
    case LessonActionTypes.LoadSingleLessonSuccess:
      return { lesson: action.payload, lessons: state.lessons };
    case LessonActionTypes.LoadSingleLessonError:
      return { lesson: null, lessons: state.lessons };
    case LessonActionTypes.UpdateLesson:
      return { lesson: new StorePending<Lesson>(null, state.lesson.error), lessons: state.lessons };
    case LessonActionTypes.UpdateLessonSuccess:
      return { lesson: state.lesson, lessons: state.lessons };
    case LessonActionTypes.UpdateLessonError:
      return { lesson: state.lesson, lessons: state.lessons };
    default:
      return state;
  }
}
