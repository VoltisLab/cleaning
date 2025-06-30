import { client } from "@/lib/apollo-client";
import { CREATE_CONTACT_ENQUIRY } from "../mutations/Enquiry";
import { ApolloError } from "@apollo/client";

type CreateEnquiryResponse = {
  createContactEnquiry: {
    message: string;
    success: boolean;
  };
};

export const createContactEnquiry = async ({
  name,
  email,
  message,
  serviceType,
}: {
  name: string;
  email: string;
  message: string;
  serviceType: string;
}): Promise<CreateEnquiryResponse> => {
  try {
    const { data } = await client.mutate<CreateEnquiryResponse>({
      mutation: CREATE_CONTACT_ENQUIRY,
      variables: { name, email, message, serviceType },
    });

    return data!;
  } catch (error: unknown) {
    const err = error as ApolloError;

    return {
      createContactEnquiry: {
        success: false,
        message: err?.message || "Something went wrong",
      },
    };
  }
};
