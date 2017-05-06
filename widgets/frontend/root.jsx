import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';

class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>

    );
  }
}

export default Root;
