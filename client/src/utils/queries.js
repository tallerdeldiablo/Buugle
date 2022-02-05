import { gql } from '@apollo/client';


export const GET_ME = gql`
query me {
  me {
    _id
    username
  }
}
`;
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};