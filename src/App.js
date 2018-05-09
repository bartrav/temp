import React, { Component } from 'react';
import './App.css';

//Components
import Sidebar from 'C:/Users/Main/codetemp/blog/src/components/sidebar.jsx';
import Blackjack from 'C:/Users/Main/codetemp/blog/src/components/blackjack.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <a className="bm-burger-button"/>
        </div>
        <Blackjack/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;