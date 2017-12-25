import { ajax } from 'rxjs'
// import { combineEpics } from 'redux-observable'
import { GET_DATA, UPDATE_DATA } from './form.action'

const getDataEpic = (action$) =>
  action$
    .ofType(GET_DATA)
    .switchMap((/* action */) => {
      ajax({ url: 'https://swapi.co/api/people/3' })
        .map((result) => {
          const data = JSON.parse(result.response)
          return {
            type: UPDATE_DATA,
            payload: data
          }
        })
    })

export { GET_DATA, UPDATE_DATA, getDataEpic }
