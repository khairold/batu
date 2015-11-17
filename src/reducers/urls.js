import { ADD_URL } from '../actions/urls'

const initialState = [
	{
		uri: 'http://yahoo.com'
	},
	{
		uri: 'http://google.com'
	}
]

export default function urls(state = initialState, action) {
  switch (action.type) {
  	case ADD_URL:
      return [...state, action.url]
    default:
      return state
  }
}
