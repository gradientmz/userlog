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
    const { userList, searchField } = this.state;
    const filteredUsers = userList.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <input type='search' placeholder='search users' onChange = { e => {
          this.setState({searchField: e.target.value}, () =>
            console.log(this.state));
          }} />
        <CardList userList = { filteredUsers }/>
      </div>
    );
  }
}

export default App;