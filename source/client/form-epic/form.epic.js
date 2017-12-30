import { Observable } from 'rxjs'

import {
  actionTypes,
  actionCreators
} from './form.epic.action'

const {
  FETCH_EPIC_DATA_REQUEST
} = actionTypes

const {
  fetchEpicDataSuccess
} = actionCreators

function getDataEpic(action$) {
  return action$.ofType(FETCH_EPIC_DATA_REQUEST)
    .switchMap((action) =>
      Observable.ajax
        .getJSON(action.payload)
        .map(({ name, detail }) => fetchEpicDataSuccess(name || detail)))
}

export default getDataEpic
