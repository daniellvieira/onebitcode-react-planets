// aonde vao ficar todas as nossas rotas

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'
import PlanetScreen from './screens/planet'
import NotFoundScreen from './screens/notFound'

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={PlanetsScreen} />
    <Route exact path='/planet/:id' component={PlanetScreen} />
    
    <Route path='*'>
      <NotFoundScreen />
    </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes