import { useSelector, useDispatch } from 'react-redux'

import { actionsWithDispatch, initialState } from './actions'
import reducer from './reducer'

export const useGithub = () => {
  const state = useSelector(state => state.github)
  const dispatch = useDispatch()

  const actions = actionsWithDispatch(dispatch, state)
  return {
    state,
    actions
  }
}

export { reducer, initialState }
