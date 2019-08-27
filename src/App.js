import React from 'react';
import {Buffer} from 'buffer';
import './App.css';
import bmp from 'bmp-js';

import Display from './Display';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      decoded: {}
    };
  }

  handleFiles(e) {
    let decoded = {};
    const file = e.target.files[0];
    console.log(file);
    file.arrayBuffer().then(buffer => {
      decoded = bmp.decode(Buffer.from(buffer));

      console.log(decoded);

      this.setState({decoded: decoded});
    });
  }


  render() {
    return (
      <div className="App">
        <input type="file" id="input" onChange={this.handleFiles.bind(this)}/>


        <Display decoded={this.state.decoded}/>
      </div>
    );
  }
}

export default App;
