/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addUser = /* GraphQL */ `
  mutation AddUser($user: AddUserInput!) {
    addUser(user: $user) {
      username
      name
      surname
      university
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($username: String!) {
    deleteUser(username: $username)
  }
`;
export const addTask = /* GraphQL */ `
  mutation AddTask($task: AddTaskInput!) {
    addTask(task: $task) {
      id
      name
      partecipants {
        username
        name
        surname
        university
      }
      expiration
      status
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask($id: String!) {
    deleteTask(id: $id)
  }
`;
