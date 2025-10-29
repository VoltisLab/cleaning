import { gql } from '@apollo/client';

export const SUBSCRIBE_TO_NEWSLETTER = gql`
  mutation SubscribeToNewsletter($email: String!, $userType: String!) {
    subscribeToNewsletter(subscriptionData: { email: $email, userType: $userType }) {
      message
      success
      subscription {
        email
        userType
      }
    }
  }
`;