import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import FilmsListMain from './components/FilmsListMain'
import FilmsDetails from './components/FilmsDetails'

function App() {
  return (
    <Router>
      <div  className='App'>
        <Switch>
          <Route path="/FilmsDetails">
            <FilmsDetails />
          </Route>
          <Route path="/">
            <FilmsListMain />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
