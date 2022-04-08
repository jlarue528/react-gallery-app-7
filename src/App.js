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
    results: [],
    loading: true
  }

  componentDidMount () {
    this.performSearch();
  }

  performSearch = (tags = "ocean") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.photos.photo,
          loading: false
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
       
        {
          (this.state.loading)
          ? <p>Loading..</p>
          :  <Results data={this.state.results}/>
        }

      </div>

      <Switch>
        <Route exact path="/" render={() => {this.performSearch("sunsets")}}/>
        <Route path="/cats" render={() => {this.performSearch("cats")}}/>
        <Route path="/dogs" render={() => {this.performSearch("dogs")}}/>
        <Route path="/computers" render={() => {this.performSearch("computers")}}/>
        <Route path="/search" render={() => {this.performSearch()}}/>
        {/* <Route component={NotFound}/> */}
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
