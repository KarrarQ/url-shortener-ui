import React, { Component } from 'react';
import './App.css';
import { getUrls, postNewUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      error: ''
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({
      urls: data.urls
    }))
  }

  addUrl = async (newUrl) => {
    postNewUrl(newUrl)
    .then((newUrl) => {
      this.setState({ urls: [...this.state.urls, newUrl]})
    })
    .catch((error) => {
      this.setState({
        error: "Oops! Something went wrong!"
      })
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          {!this.state.urls.length && <h2>No shortened urls, please add some</h2>}
          <UrlForm addUrl={this.addUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
