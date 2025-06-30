import { gql } from "@apollo/client";

export const CREATE_CONTACT_ENQUIRY = gql`
  mutation CreateContactEnquiry(
    $name: String!
    $email: String!
    $message: String!
    $serviceType: ServiceTypeEnum!
  ) {
    createContactEnquiry(
      enquiryData: {
        name: $name
        email: $email
        message: $message
        serviceType: $serviceType
      }
    ) {
      message
      success
    }
  }
`;
