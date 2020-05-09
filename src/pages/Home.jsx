import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrimarySearchAppBar from './../components/PrimarySearchAppBar';

function Home(){
    return(
        <div className="App">
            <PrimarySearchAppBar/>
        </div>
    );
}

export default Home;