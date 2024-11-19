import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: { id: '', firstName: '', lastName: '', email: '', department: '' },
      error: '',
      isEditing: false,
      isDarkMode: false,  // Add state for dark mode
    };
  }

  componentDidMount() {
    this.fetchUsers(); // Fetch users when component mounts
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setState({ isDarkMode: savedTheme === 'dark' });
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
  }

  // Toggle Dark/Light Mode
  toggleTheme = () => {
    const newTheme = this.state.isDarkMode ? 'light' : 'dark';
    this.setState({ isDarkMode: !this.state.isDarkMode });
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode');
  };

  // Fetch users (GET request)
  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => this.setState({ error: 'Failed to fetch users' }));
  };

  // Add user (POST request)
  addUser = (user) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: [...this.state.users, data] });
      })
      .catch((error) => this.setState({ error: 'Failed to add user' }));
  };

  // Update user (PUT request)
  updateUser = (user) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = this.state.users.map((u) =>
          u.id === data.id ? data : u
        );
        this.setState({ users: updatedUsers, isEditing: false, currentUser: { id: '', firstName: '', lastName: '', email: '', department: '' } });
      })
      .catch((error) => this.setState({ error: 'Failed to update user' }));
  };

  // Delete user (DELETE request)
  deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const filteredUsers = this.state.users.filter((user) => user.id !== id);
        this.setState({ users: filteredUsers });
      })
      .catch((error) => this.setState({ error: 'Failed to delete user' }));
  };

  // Handle form changes
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      currentUser: {
        ...this.state.currentUser,
        [name]: value,
      },
    });
  };

  // Handle form submit (Add or Update)
  handleSubmit = (e) => {
    e.preventDefault();
    const { currentUser, isEditing } = this.state;
    if (isEditing) {
      this.updateUser(currentUser);  // If editing, update user
    } else {
      this.addUser(currentUser);  // Otherwise, add new user
    }
  };

  // Set user for editing
  editUser = (user) => {
    this.setState({
      currentUser: user,
      isEditing: true,
    });
  };

  render() {
    const { users, currentUser, error, isEditing, isDarkMode } = this.state;

    return (
      <div className="app-container">
        <div className='container'>
          <h1>User Management</h1>
              {error && <div className="error-message">{error}</div>}
            <button onClick={this.toggleTheme} className={isDarkMode ? 'dark-mode' : ''}>
               {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>

        <UserForm
          currentUser={currentUser}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isEditing={isEditing}
          isDarkMode={isDarkMode}
        />

        <UserList
          users={users}
          editUser={this.editUser}
          deleteUser={this.deleteUser}
          isDarkMode={isDarkMode}
        />

      </div>
    );
  }
}

export default App;