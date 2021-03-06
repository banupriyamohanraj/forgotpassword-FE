import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"
import { UserProvider } from './UserContext'
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword'

function App() {

return <>
<Router>
    <div id="wrapper">
      <UserProvider>
      <Switch>
        <Route path ="/" component={Forgotpassword} exact={true}></Route>
        <Route path ="/resetpassword/:token" component={Resetpassword} exact={true}></Route>
      </Switch>
      </UserProvider>
      
    </div>
  </Router>

</>


}

export default App;
