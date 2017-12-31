import {
  Observable
} from 'rxjs'

import {
  actionTypes,
  actionCreators
} from './form.epic.action'

const {
  FETCH_EPIC_DATA_REQUEST
} = actionTypes

const {
  fetchEpicDataSuccess,
  fetchEpicDataFailure
} = actionCreators

function getDataEpic(action$) {
  const onSuccess = ({ name, detail }) => fetchEpicDataSuccess(name || detail)
  const onFailure = (error) => Observable.of(fetchEpicDataFailure(error.toString()))
  fetchEpicDataFailure()
  return action$.ofType(FETCH_EPIC_DATA_REQUEST)
    .switchMap((action) =>
      Observable.ajax
        .getJSON(action.payload)
        .map(onSuccess)
        .catch(onFailure))
}

export default getDataEpic
