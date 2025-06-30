import { client } from "@/lib/apollo-client";
import { SUBSCRIBE_TO_NEWSLETTER } from "../mutations/NewsLetter";
import { ApolloError } from "@apollo/client";

type SubscribeResponse = {
  subscribeToNewsletter: {
    message: string;
    success: boolean;
    subscription: {
      email: string;
    };
  };
};

export const subscribeToNewsletter = async (
  email: string
): Promise<SubscribeResponse> => {
  try {
    const { data } = await client.mutate<SubscribeResponse>({
      mutation: SUBSCRIBE_TO_NEWSLETTER,
      variables: { email },
    });

    return data!;
  } catch (error: unknown) {
    const err = error as ApolloError;

    return {
      subscribeToNewsletter: {
        success: false,
        message: err?.message || "An error occurred while subscribing.",
        subscription: { email },
      },
    };
  }
};
