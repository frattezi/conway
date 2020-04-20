import {
  initialState,
  STOP_LOADING,
  START_LOADING,
  SET_RESPONSE_DATA
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        response: {
          ...state.response,
          isLoading: true
        }
      }

    case STOP_LOADING:
      return {
        response: {
          ...state.response,
          isLoading: false
        }
      }

    case SET_RESPONSE_DATA:
      return {
        response: {
          ...state.response,
          data: action.payload
        }
      }

    default:
      return state
  }
}
