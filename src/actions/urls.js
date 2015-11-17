export const ADD_URL = 'ADD_URL'

export function addUrl(uri) {
  return {
    type: ADD_URL,
    url: {uri}
  }
}
