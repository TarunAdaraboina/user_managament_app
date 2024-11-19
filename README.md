# User Management System
This is a simple React-based application that allows users to manage user details (add, edit, delete) by interacting with a mock backend API (JSONPlaceholder). The app supports CRUD operations and demonstrates state management in React.

## Features:
- Fetch and display a list of users from the mock API.
- Add a new user to the list.
- Edit an existing user's details.
- Delete a user from the list.
- Basic error handling for failed network requests.

# Viewing Users
Upon loading the page, a list of users fetched from the JSONPlaceholder API will be displayed.

# Adding a User
To add a new user, fill out the form with the user's details (First Name, Last Name, Email, and Department).
Click the Submit button to add the user.
Note: The user won't be persisted beyond the session due to the use of a mock API (JSONPlaceholder), but it will be displayed in the list temporarily.

# Editing a User
To edit a user, click the Edit button next to the user you want to edit.
Modify the user details in the form.
Click Save to update the user.

# Deleting a User
To delete a user, click the Delete button next to the user you wish to remove.
The user will be removed from the list.
API Endpoints

# The app interacts with the following mock API endpoints from JSONPlaceholder:
GET /users - Fetch all users.
POST /users - Add a new user (simulated by POST to /users).
PUT /users/{id} - Update a user's details.
DELETE /users/{id} - Delete a user by ID.
Error Handling
The application includes basic error handling for failed network requests. If the app encounters an error while fetching or manipulating data, an error message will be displayed on the UI.

# Technologies Used
React
JavaScript (ES6+)
Fetch API (for HTTP requests)
JSONPlaceholder API (mock backend)

# Future Improvements
Add user authentication and authorization.
Persist data to a real backend instead of using JSONPlaceholder.
using real backend we can edit user without using mockApi.
