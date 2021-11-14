/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllUsers = /* GraphQL */ `
  query GetAllUsers {
    getAllUsers {
      username
      name
      surname
      university
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      name
      surname
      university
    }
  }
`;
export const getAllTasks = /* GraphQL */ `
  query GetAllTasks {
    getAllTasks {
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
export const getTask = /* GraphQL */ `
  query GetTask($id: String!) {
    getTask(id: $id) {
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
