import { Observable } from 'rxjs'

import { FETCH_EPIC_DATA_REQUEST } from './form.epic.action.types'

import {
  fetchEpicShowLoading,
  fetchEpicHideLoading,
  fetchEpicDataSuccess,
  fetchEpicDataFailure
} from './form.epic.action.creators'

function getDataEpic(action$) {
  return action$
    // (1) Filter actions to supported types only...
    .ofType(FETCH_EPIC_DATA_REQUEST)
    // (2) Process each action you get from stream...
    .switchMap((action) => {
      // (3) Create an observable to show loader...
      const showLoading = Observable.of(fetchEpicShowLoading())
      // (4) Create an observable for making ajax request and dealing with ajax response
      const dataRequest = Observable.ajax
        .getJSON(action.payload)
        .map((data) => fetchEpicDataSuccess(data))
        .catch((error) => Observable.of(fetchEpicDataFailure(error)))
      // (5) Create an observable to hide loader...
      const hideLoading = Observable.of(fetchEpicHideLoading())
      // (6) Create a unified observable that runs your other observables in strict order
      const pipeline = Observable.concat(showLoading, dataRequest, hideLoading)
      return pipeline
    })
}

export default getDataEpic
