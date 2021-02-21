import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userList: [],
      searchField: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.title = "Userlog";

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ userList: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { userList, searchField } = this.state;
    const filteredUsers = userList.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Userlog</h1>
        <h2>A practice app with React by Mark Zhou</h2>
        <SearchBox
          placeholder="Search users..."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList userList={filteredUsers} />
      </div>
    );
  }
}

export default App;
