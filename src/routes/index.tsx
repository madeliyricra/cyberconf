
import { 
  Route, 
  BrowserRouter as Router, 
  Switch, 
  Redirect
} from 'react-router-dom'
import Layout from '../components/Layout'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Home from '../pages/Home'
import NotFound from '../pages/NotFund'
import { 
  LINK_BADGENEW, 
  LINK_BADGES, 
  LINK_HOME, 
  LINK_NOTFOUND 
} from '../utils/link'

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={LINK_HOME} component= {Home}/>
          <Route path={LINK_BADGES} component= {Badges}/>
          <Route path={LINK_BADGENEW} component= {BadgeNew}/>
          <Route path={LINK_NOTFOUND} component= {NotFound}/>
          <Redirect to={LINK_NOTFOUND}/>
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes