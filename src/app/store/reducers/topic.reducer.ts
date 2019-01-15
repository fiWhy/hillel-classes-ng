import { TopicActionTypes, TopicActions } from '../actions/topic.actions';
import { Topic } from '@core/models/topic';


export interface State {
  items: Topic[];
}

export const initialState: State = {
  items: []
};

export function reducer(state = initialState, action: TopicActions): State {
  switch (action.type) {
    case TopicActionTypes.LoadTopics: {
      return {
        items: []
      }
    }

    case TopicActionTypes.UpdateTopic: {
      return {
        items: state.items
      }
    }

    case TopicActionTypes.AddTopic: {
      return {
        items: state.items
      }
    }

    case TopicActionTypes.LoadTopicsSuccess: {
      return {
        items: action.payload
      }
    }

    case TopicActionTypes.UpdateTopicSuccess: {
      return {
        items: state.items
      }
    }


    default:
      return state;
  }
}
