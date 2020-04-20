import { createAction } from 'app/helpers/redux'

// select duck from store
export const DUCK_NAME = 'theme'

// redux types
export const SWITCH_THEME = `${DUCK_NAME}/SWITCH_THEME`

// create actions
export const switchTheme = createAction(SWITCH_THEME)

export const initialState = {
  theme: {
    isDarkMode: true,
  }
}

/**
 * @typedef {Object} DuckActions
 * @property {function} switchTheme - change theme mode 
 *
 * @typedef {Object} DuckState
 * @property {object} state duck state
 * @property {object} state.thembe duck theme
 * @property {boolean} state.theme.isDarkMode duck theme mode
 *
 * @param  {function} dispatch dispatch actions to change store
 * @param  {DuckState} state duck state
 * @param  {boolean} state.response.isLoading duck response is loading
 *
 * @returns {DuckActions} actions generated
 */
export const actionsWithDispatch = (dispatch) => ({
  /** Switch themes between dark and ligth **/
  switchTheme: () => {
    dispatch(switchTheme())
  }
})
