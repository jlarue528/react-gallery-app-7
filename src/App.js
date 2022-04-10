import React, { Component } from 'react';
import './App.css';
import Results from './components/Results'
import Nav from './components/Nav';
import Search from './components/Search';
import config from './config/config.js';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NotFound from './components/NotFound';

const apiKey = config;

class App extends Component {

  state = {
    results: [],
    cats: [],
    dogs: [],
    computers: []
  }

  componentDidMount () {
    this.performSearch();
    this.catNavItemSearch();
    this.dogNavItemSearch();
    this.computerNavItemSearch();
  }

  performSearch = (tags = "ocean") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  catNavItemSearch = (tags = "cats") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          cats: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  dogNavItemSearch = (tags = "dogs") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dogs: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  computerNavItemSearch = (tags = "computers") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          computers: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <Search 
            onSearch = {this.performSearch}
        />
        <Nav />
      </div>

      <Switch>
        <Route exact path="/" render={() => <Results data={this.state.results}/>}/>
        <Route path="/cats" render={() => <Results data={this.state.cats}/>}/>
        <Route path="/search" render={() => <Redirect to="/"/>}/>
        <Route path="/dogs" render={() => <Results data={this.state.dogs}/>}/>
        <Route path="/computers" render={() => <Results data={this.state.computers}/>}/>
        <Route path="/:searchQuery" render={() => <Results data={this.state.results}/>}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
