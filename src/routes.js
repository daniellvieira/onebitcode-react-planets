// aonde vao ficar todas as nossas rotas

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PlanetScreen from './screens/planets'
import Planet from './components/planets/planet'

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={PlanetScreen} />
    </Switch>
  </BrowserRouter>
)

export default Routes