import { combineReducers } from 'redux'
import counter from './counter'
import urls from './urls'

const rootReducer = combineReducers({
  counter, urls
})

export default rootReducer
