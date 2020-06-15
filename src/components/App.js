import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ySJsv8UlFFmeeWN_l37GO8rx8pEdAfUn1tXaUV-JLBU'
      }
  });
}




  render() {
   return (
     <div className="ui container" style={{ marginTop: '20px' }}>
     <SearchBar onSubmit={this.onSearchSubmit} />
     </div>
   );
  }
}

export default App;
