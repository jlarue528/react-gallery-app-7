import React, { Component } from 'react';
import './App.css';
import Results from './components/Results'
import Nav from './components/Nav';
import Search from './components/Search';
import config from './config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import NotFound from './components/NotFound';

const apiKey = config;

class App extends Component {

  state = {
    results: []
  }

  componentDidMount () {
    this.performSearch();
  }

  performSearch = (tags = 'cats') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.photos.photo
        });
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  render() {
    console.log(this.state.results);
    return (
    <BrowserRouter>
      <div className="container">
        <Search 
            onSearch = {this.performSearch}
        />
        <Nav 
          dogUrl= "/dogs"
          catUrl= "/cats"
          computersUrl = "/computers"
        />
       
        <Results 
          data={this.state.results}
        />
      </div>

      <Switch>
        <Route path="/cats" render={() => {this.performSearch("cats")}}/>
        <Route path="/dogs" render={() => {this.performSearch("dogs")}}/>
        <Route path="/computers" render={() => {this.performSearch("computers")}}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
