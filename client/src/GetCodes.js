import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class GetCodes extends Component {
  state = {
    codes: []
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  componentDidMount() {
    const submitData = async code => {
      try {
        const url = 'https://grim-dracula-74484.herokuapp.com/api/all';
        const data = await fetch(url, {
          method: 'GET', // or 'PUT'
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const response = await data.json();
        this.setState({ codes: response });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    submitData();
  }
  render() {
    const codes = this.state.codes.map((code, i) => (
      <div className="code" key={i}>
        <p>{code.title}</p>
        <span>{code.date}</span>
        <br /> <br />
        <code>{code.code}</code>
      </div>
    ));

    return (
      <div className="App">
        <h1>Welcome to code sharing!</h1>
        <Link to="/create_code">Create New</Link>

        {codes}
      </div>
    );
  }
}

export default GetCodes;
