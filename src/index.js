import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import MarkDownInput from './components/md-input';

const marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
  }
  updateMarkdown = markdown => {
    this.setState({ markdown });
  };
  render() {
    const { markdown } = this.state;

    return (
      <div className="container app">
        <h2>Markdown Previewer</h2>
        <div className="col-auto">
          <MarkDownInput
            onChange={e => this.updateMarkdown(e.target.value)}
            markdown={markdown}
          />
        </div>
        <div className="col-auto">
          <label>Output: </label>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
