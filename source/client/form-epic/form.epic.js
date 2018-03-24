import 'isomorphic-fetch'
import { Agent } from 'https'

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
  const onSuccess = ({ name }) => fetchEpicDataSuccess(name)
  const onFailure = (error) => fetchEpicDataFailure(error.toString())
  const options = {
    agent: new Agent({ rejectUnauthorized: false }) // Only needed for self-signed certificates
  }
  return action$.ofType(FETCH_EPIC_DATA_REQUEST)
    .switchMap((action) =>
      Observable.from(fetch(action.payload, options)
        .then((response) => response.json())
        .then(onSuccess)
        .catch(onFailure)))
}

export default getDataEpic
