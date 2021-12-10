import './App.css';
import Container from '@mui/material/Container';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Appbar from './components/Appbar.js';
import BottomNavigation from './components/bottomnavigation.js';
import News from './components/news.js'
import NewsGlobal from './components/newsglobal.js';
import Genre from './components/genre.js';
import Result from './components/result.js';
import Apple from '../src/pages/Apple.js';
import Basketball from '../src/pages/basketball.js';
import Cricket from '../src/pages/cricket.js';
import Football from '../src/pages/football.js'
import Food from '../src/pages/food.js';
import Politics from '../src/pages/politics.js';
import Technology from '../src/pages/technology.js';
import Covid from '../src/pages/covid19.js';
import Asia from '../src/pages/asia.js';
import Climate from '../src/pages/climate.js';
import Space from '../src/pages/space.js';
import SmartPhone from '../src/pages/smartphones.js'

function App() {
  return (
    <BrowserRouter>
      <Appbar/>
      <Container sx={{display:"flex",flexDirection:"row",alignItems:"flex-start",flexWrap:"wrap"}} style={{marginTop : "70px",marginBottom : "70px"}}>
        <Switch>
          <Route exact path = "/">
            <News/>
          </Route>
          <Route exact path = "/NewsGlobal">
            <NewsGlobal/>
          </Route>
          <Route exact path = "/Genre" component={Genre}>
           
          </Route>
          <Route exact path = "/Result">
          <Result />
          </Route>

          <Route exact path = "/Apple">
          <Apple/>
          </Route>

          <Route exact path = "/Basketball">
          <Basketball/>
          </Route>

          <Route exact path = "/Cricket">
          <Cricket/>
          </Route>

          <Route exact path = "/Football">
          <Football/>
          </Route>

          <Route exact path = "/Food">
          <Food/>
          </Route>

          <Route exact path = "/Politics">
          <Politics/>
          </Route>

          <Route exact path = "/Technology">
          <Technology/>
          </Route>

          <Route exact path = "/Covid">
          <Covid/>
          </Route>

          <Route exact path = "/Asia">
          <Asia/>
          </Route>

          <Route exact path = "/Climate">
          <Climate/>
          </Route>

          <Route exact path = "/Space">
          <Space/>
          </Route>

          <Route exact path = "/SmartPhone">
          <SmartPhone/>
          </Route>
        </Switch> 
      </Container>
      <BottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
