import { Observable } from 'rxjs'

import {
  GET_DATA_VIA_OBSERVABLE,
  hasData
} from './form.observable.action'

function getDataEpic(action$) {
  return action$.ofType(GET_DATA_VIA_OBSERVABLE)
    .switchMap((action) =>
      Observable.ajax
        .getJSON(action.payload)
        .map((data) => hasData(data.name)))
}

export default getDataEpic
