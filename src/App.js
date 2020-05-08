import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            {/* <GameContextProvider> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component ={Cart} />
            {/* <Route exact path="/createGame" component ={CreateGame} />
            <Route exact path="/cutOffMark" component={CutOffMark} />
            <Route exact path="/choosePlaylist" component={ChoosePlaylist} />
            <Route exact path="/difficultyPage" component={DifficultyPage} />
            <Route exact path="/countdown" component={CountdownPage} />
            <Route exact path="/gamePage" component={GamePage} />
            <Route exact path="/Leaderboard" component={Leaderboard} />
            <Route exact path="/multiplayerPage" component={MultiplayerPage} />
            <Route exact path="/playerOne" component={PlayerOnePage} />
            <Route exact path="/playerOneGame" component={PlayerOneGame} />
            <Route exact path="/playerTwo" component={PlayerTwoPage} />
            <Route exact path="/playerTwoGame" component={PlayerTwoGame} />
            <Route exact path="/timeUp1" component={TimeUp1} />
            <Route exact path="/multiplayerNames" component={NameOneInput} />
            <Route exact path="/gameOver" component ={GameOver} />
            <Route exact path="/singleplayerName" component={SinglePlayerInput} /> */}
            {/* </GameContextProvider> */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
