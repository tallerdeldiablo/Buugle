import { gql } from '@apollo/client';


export const QUERY_TECH = gql`
query me {
  me {
    _id
    username
  }
}
`;