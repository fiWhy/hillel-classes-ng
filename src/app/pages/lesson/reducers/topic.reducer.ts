import { TopicActions, TopicActionTypes } from '../actions/topic.actions';
import { LessonTopic } from '@core/models/lesson-topic';


export interface State {
  id: number;
  items: LessonTopic[];
}

export const initialState: State = { id: null, items: [] };

export function reducer(state = initialState, action: TopicActions): State {
  switch (action.type) {
    case TopicActionTypes.LoadTopics: {
      return { id: null, items: [] };
    }

    case TopicActionTypes.LoadTopicsSuccess: {
      return { id: state.id, items: action.payload };
    }

    case TopicActionTypes.LoadTopicsError: {
      return { id: state.id, items: [] };
    }

    default:
      return state;
  }
}
