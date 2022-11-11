import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import  Home  from './Componets/Home';
import  LandinPage  from './Componets/LandingPage';
import Description from './Componets/Description';
import Form from './Componets/Form';
import Favorites from './Componets/Favorites';

import Error from './Componets/Error';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={LandinPage}/>
      <Route exact path={"/home"} component={Home}/>
      <Route exact path={"/form"} component={Form}/>
      <Route exact path={"/pokemon/:id"} component={Description}/>
      <Route exact path={"/favorites"} component={Favorites}/>
      <Route path={"*"} component={Error}/>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
