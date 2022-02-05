import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//save book ?
export const SAVE_BOOK = gql`
  mutation saveBook($authors: String!, $description: String!, $title: String!, $bookId: ID) {
    saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId) {
      token
      user {
        _id
        authors
        description
        title
        bookId
      }
    }
  }
`;

//remove
export const REMOVE_BOOK = gql` 
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;