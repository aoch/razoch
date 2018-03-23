import Application from '../client/application/application'
import ThunkContainer, { loadData as loadThunkData } from '../client/form-thunk/form.thunk.container'

const Routes = [
  { path: '/', exact: true, component: Application },
  { path: '/thunk', component: ThunkContainer, loadData: loadThunkData },
]

export default Routes
