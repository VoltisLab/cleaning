import { gql } from '@apollo/client';

export const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation SubscribeToNewsletter($email: String!) {
    subscribeToNewsletter(subscriptionData: { email: $email }) {
      message
      success
      subscription {
        email
      }
    }
  }
`;