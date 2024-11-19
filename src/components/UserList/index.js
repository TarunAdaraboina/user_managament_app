import './index.css';

const UserList = ({ users, editUser, deleteUser, isDarkMode }) => {
  return (
    <div className={`user-list ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-details">
              {user.firstName} {user.lastName} - {user.email} - {user.department}
            </div>
            <div className="buttons">
              <button
                className={`edit-button ${isDarkMode ? 'dark-mode' : ''}`}
                onClick={() => editUser(user)}
              >
                Edit
              </button>
              <button
                className={`delete-button ${isDarkMode ? 'dark-mode' : ''}`}
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
