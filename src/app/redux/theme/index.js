import { useSelector, useDispatch } from 'react-redux'

import { actionsWithDispatch, initialState } from './actions'
import reducer from './reducer'

export const useTheme = () => {
  const state = useSelector(state => state.theme)
  const dispatch = useDispatch()

  const actions = actionsWithDispatch(dispatch, state)
  return {
    state,
    actions
  }
}

export { reducer, initialState }
