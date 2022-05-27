import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CrearVideoGames } from './components/CrearVideoGames/CrearVideoGames';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      <Route path='/crear' component={CrearVideoGames} />
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
