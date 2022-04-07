import React, { Component } from 'react';
import './App.css';
import Results from './components/Results'
import Nav from './components/Nav';
import Search from './components/Search';
import config from './config';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

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
          dogUrl= "/search=dogs"
          catUrl= "/search=cats"
          computersUrl = "/search=computers"
          navSearch = {this.performSearch}
        />
       
        <Results 
          data={this.state.results}
          apiKey={apiKey}
        />

      </div>
    </BrowserRouter>
    )
  }
}

export default App;
