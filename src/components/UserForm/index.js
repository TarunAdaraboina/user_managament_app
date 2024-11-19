import React from 'react';
import './index.css';

const UserForm = ({ currentUser, handleChange, handleSubmit, isEditing, isDarkMode }) => {
  return (
    <form 
      className={`user-form ${isDarkMode ? 'dark-mode' : ''}`} 
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="firstName"
        value={currentUser.firstName || ''}
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        value={currentUser.lastName || ''}
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={currentUser.email || ''}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        value={currentUser.department || ''}
        placeholder="Department"
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={!currentUser.firstName || !currentUser.lastName || !currentUser.email || !currentUser.department}>
        {isEditing ? 'Save User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
