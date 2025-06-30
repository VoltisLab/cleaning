import { client } from "@/lib/apollo-client";
import { SUBSCRIBE_TO_NEWSLETTER } from "../mutations/NewsLetter";

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

    // Always return the expected shape
    return data!;
  } catch (error: any) {
    return {
      subscribeToNewsletter: {
        success: false,
        message: error.message || "An error occurred while subscribing.",
        subscription: { email },
      },
    };
  }
};
