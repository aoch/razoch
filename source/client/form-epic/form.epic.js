import {
  Observable
} from 'rxjs'

import fetch from '../../helpers/fetch'
import {
  FETCH_EPIC_DATA_REQUEST
} from './form.epic.action.types'

import {
  fetchEpicDataSuccess,
  fetchEpicDataFailure
} from './form.epic.action.creators'

function getDataEpic(action$) {
  const onSuccess = ({ name }) => fetchEpicDataSuccess(name)
  const onFailure = (error) => fetchEpicDataFailure(error.toString())
  return action$.ofType(FETCH_EPIC_DATA_REQUEST)
    .switchMap((action) =>
      Observable.from(fetch(action.payload)
        .then(onSuccess)
        .catch(onFailure)))
}

export default getDataEpic
