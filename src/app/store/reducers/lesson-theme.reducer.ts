import { Lesson } from 'src/app/core/models/lesson';
import { LessonThemeActions, LessonThemeActionTypes } from '../actions/lesson-theme.actions';


export interface State {
  items: any;
}

export const initialState: State = {
  items: []
};

export function reducer(state = initialState, action: LessonThemeActions): State {
  switch (action.type) {
    case LessonThemeActionTypes.LoadLessonThemes: {
      return {
        items: []
      }
    }

    case LessonThemeActionTypes.UpdateLessonThemes: {
      return {
        items: state.items
      }
    }

    case LessonThemeActionTypes.LoadLessonThemesSuccess: {
      return {
        items: action.payload
      }
    }

    case LessonThemeActionTypes.UpdateLessonThemesSuccess: {
      return {
        items: state.items
      }
    }


    default:
      return state;
  }
}
