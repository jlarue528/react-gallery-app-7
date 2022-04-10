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

  sunsetSearch () {
    return this.performSearch("sunsets");
  }

  catSearch () {
    return this.performSearch("cats");
  }

  dogSearch () {
    return this.performSearch("dogs")
  }

  computerSearch = () => {
    return this.performSearch("computer")
  }

  userDefinedSearch = (searchTerm) => {
    return this.performSearch(searchTerm)
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
          dogUrl= {this.dogSearch.bind(this)}
          catUrl= {this.catSearch.bind(this)}
          computersUrl = {this.computerSearch.bind(this)}
        />
       
        {
          (this.state.loading)
          ? <p>Loading..</p>
          :  <Results data={this.state.results}/>
        }

      </div>

      <Switch>
        <Route path="/search/computers" render={() => <Results data={this.computerSearch}/>}/>
        <Route exact path="/" render={() => <Results data={this.sunsetSearch}/>}/>
        <Route path="/search/cats" render={() => <Results data={this.catSearch}/>}/>
        <Route path="/search/dogs" render={() => <Results data={this.dogSearch}/>}/>
        <Route path="/search/:searchQuery" render={() => <Results data={this.userDefinedSearch}/>}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
