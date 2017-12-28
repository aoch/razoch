import { combineEpics } from 'redux-observable'

import getDataEpic from './form-observable/form.observable.epic'

const epic = combineEpics(getDataEpic)

export default epic
