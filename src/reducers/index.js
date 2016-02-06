import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import counter from './counter'
import urls from './urls'

const rootReducer = combineReducers({
  counter, urls, form: formReducer
})

export default rootReducer
