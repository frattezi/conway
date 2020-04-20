import {
  initialState,
  SWITCH_THEME,
} from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        theme: {
          ...state.theme,
          isDarkMode: state.isDarkMode ?  false : true
        }
      }

    default:
      return state
  }
}
