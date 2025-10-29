import { client } from "@/lib/apollo-client";
import { LOGIN_MUTATION } from "../mutations/auth";
import { ApolloError } from "@apollo/client";

type LoginResponse = {
  tokenAuth: {
    token: string;
    refreshToken: string;
    payload: unknown;
    user: {
      id: number;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      userType: string;
    };
  };
};

export const loginToBackend = async (username: string, password: string) => {
  try {
    console.log("🔐 Attempting backend login for:", username);
    const { data } = await client.mutate<LoginResponse>({
      mutation: LOGIN_MUTATION,
      variables: { username, password },
    });

    if (data?.tokenAuth?.token) {
      console.log("✅ Backend login successful");
      // Store the token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('pebbleAdminToken', data.tokenAuth.token);
      }
      return {
        success: true,
        token: data.tokenAuth.token,
        user: data.tokenAuth.user,
      };
    }

    return {
      success: false,
      error: "No token received from backend",
    };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("❌ Backend login failed:", err.message);
    return {
      success: false,
      error: err.message || "Login failed",
    };
  }
};

