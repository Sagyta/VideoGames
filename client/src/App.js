import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import GameDetalles from './components/GameDetalles/GameDetalles';
import CrearVideoGames from './components/CrearVideoGames/CrearVideoGames';
import Error404 from './components/Error404/Error404';

function App() {  
  return (
    
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/crear' component={CrearVideoGames} />
      <Route exact path='/home/:id/' component={GameDetalles}/>
      <Route exact path='*/*' component={Error404}/>     
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
