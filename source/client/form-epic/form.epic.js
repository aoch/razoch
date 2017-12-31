import {
  Observable
} from 'rxjs'

import {
  FETCH_EPIC_DATA_REQUEST
} from './form.epic.action.types'

import {
  fetchEpicDataSuccess,
  fetchEpicDataFailure
} from './form.epic.action.creators'

function getDataEpic(action$) {
  const onSuccess = ({ name, detail }) => fetchEpicDataSuccess(name || detail)
  const onFailure = (error) => Observable.of(fetchEpicDataFailure(error.toString()))
  return action$.ofType(FETCH_EPIC_DATA_REQUEST)
    .switchMap((action) =>
      Observable.ajax
        .getJSON(action.payload)
        .map(onSuccess)
        .catch(onFailure))
}

export default getDataEpic
