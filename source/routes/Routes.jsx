import Application from '../client/application/application'
import ThunkContainer, { loadData as loadThunkData } from '../client/form-thunk/form.thunk.container'
import SagaContainer, { loadData as loadSagaData } from '../client/form-saga/form.saga.container'

const Routes = [
  { path: '/', exact: true, component: Application },
  { path: '/thunk', component: ThunkContainer, loadData: loadThunkData },
  { path: '/saga', component: SagaContainer, loadData: loadSagaData }
]

export default Routes
