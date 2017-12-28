import { combineEpics } from 'redux-observable'

import getDataEpic from './form-observable/form.observable.epic'

const rootEpic = combineEpics(getDataEpic)

export default rootEpic
