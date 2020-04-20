import { combineReducers } from 'redux'

// import ducks
import * as github from './github'

// define initial state
export const initialState = {
  github: github.initialState
}

// combine reducers
export const rootReducer = combineReducers({
  github: github.reducer
})
