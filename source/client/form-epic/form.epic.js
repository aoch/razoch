import { Observable } from 'rxjs'

import {
  GET_DATA_VIA_EPIC,
  hasData
} from './form.epic.action'

function getDataEpic(action$) {
  return action$.ofType(GET_DATA_VIA_EPIC)
    .switchMap((action) =>
      Observable.ajax
        .getJSON(action.payload)
        .map((data) => hasData(data.name)))
}

export default getDataEpic
