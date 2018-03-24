import { ApplicationRoute } from '../client/application/application'
import { FormThunkRoute } from '../client/form-thunk/form.thunk.container'
import { FormSagaRoute } from '../client/form-saga/form.saga.container'
import { FormEpicRoute } from '../client/form-epic/form.epic.container'

const Routes = [
  { path: '/', exact: true, ...ApplicationRoute },
  { path: '/thunk', ...FormThunkRoute },
  { path: '/saga', ...FormSagaRoute },
  { path: '/epic', ...FormEpicRoute },
]

export default Routes
