import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      userList: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({userList: users}))
  }

  render() {
    return (
      <div className='App'>
        <CardList userList={this.state.userList}/>
      </div>
    );
  }
}

export default App;