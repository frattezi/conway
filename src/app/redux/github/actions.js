import { createAction } from 'app/helpers/redux'

// select duck from store
export const DUCK_NAME = 'github'

// redux types
export const STOP_LOADING = `${DUCK_NAME}/STOP_LOADING`
export const START_LOADING = `${DUCK_NAME}/START_LOADING`
export const SET_RESPONSE_DATA = `${DUCK_NAME}/SET_RESPONSE_DATA`

// create actions
export const stopLoading = createAction(STOP_LOADING)
export const startLoading = createAction(START_LOADING)
export const setResponseData = createAction(SET_RESPONSE_DATA)

export const initialState = {
  response: {
    data: null,
    error: null,
    isLoading: false
  }
}

/**
 * @typedef {Object} DuckActions
 * @property {function} fetchGithubProfile - Fetch an specified github user data
 *
 * @typedef {Object} DuckState
 * @property {object} state duck state
 * @property {object} state.response duck response
 * @property {object} state.response.data duck response data
 * @property {object} state.response.error duck response error
 *
 * @param  {function} dispatch dispatch actions to change store
 * @param  {DuckState} state duck state
 * @param  {boolean} state.response.isLoading duck response is loading
 *
 * @returns {DuckActions} actions generated
 */
export const actionsWithDispatch = (dispatch, state = initialState) => ({
  /** Async fetch an specified github user data
   *
   * @param  {string} username github username
   */
  fetchGithubProfile: async ({ username }) => {
    dispatch(startLoading())
    const result = await fetch(`https://api.github.com/users/${username}`)
    dispatch(setResponseData(await result.json()))
    dispatch(stopLoading())
  }
})
