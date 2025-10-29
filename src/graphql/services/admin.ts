import { client } from "@/lib/apollo-client";
import {
  GET_ALL_SUBSCRIBERS,
  GET_ALL_ENQUIRIES,
  GET_ALL_BOOKINGS,
  GET_ADMIN_STATS,
  GET_ALL_USERS,
  GET_CLEANER_APPLICATIONS,
} from "../queries/admin";
import { ApolloError } from "@apollo/client";

// Types
export type Subscriber = {
  id: string;
  email: string;
  userType: string;
  createdAt: string;
  isActive: boolean;
};

export type Enquiry = {
  id: string;
  name: string;
  email: string;
  message: string;
  serviceType: string;
  createdAt: string;
  status: string;
};

export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal: string;
  serviceType: string;
  subCategory: string;
  date: string;
  timeSlot: string;
  frequency: string;
  status: string;
  createdAt: string;
};

export type AdminStats = {
  totalSubscribers: number;
  totalBookers: number;
  totalCleaners: number;
  totalEnquiries: number;
  totalBookings: number;
  pendingBookings: number;
  completedBookings: number;
  newSubscribersThisMonth: number;
  newEnquiriesThisMonth: number;
  newBookingsThisMonth: number;
  revenueThisMonth: number;
  activeUsers: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: string;
  isVerified: boolean;
  createdAt: string;
  lastLogin: string;
  totalBookings: number;
};

export type CleanerApplication = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  availability: string;
  status: string;
  createdAt: string;
};

// Fetch all subscribers
export const getAllSubscribers = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_SUBSCRIBERS,
      fetchPolicy: "network-only",
    });
    return data.getAllSubscribers;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("Error fetching subscribers:", err.message);
    return { subscribers: [], total: 0 };
  }
};

// Fetch all enquiries
export const getAllEnquiries = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_ENQUIRIES,
      fetchPolicy: "network-only",
    });
    return data.getAllEnquiries;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("Error fetching enquiries:", err.message);
    return { enquiries: [], total: 0 };
  }
};

// Fetch all bookings
export const getAllBookings = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_BOOKINGS,
      fetchPolicy: "network-only",
    });
    return data.getAllBookings;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("Error fetching bookings:", err.message);
    return { bookings: [], total: 0 };
  }
};

// Fetch admin statistics
export const getAdminStats = async () => {
  try {
    const { data } = await client.query({
      query: GET_ADMIN_STATS,
      fetchPolicy: "network-only",
    });
    return data.getAdminStats;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("Error fetching admin stats:", err.message);
    return null;
  }
};

// Fetch all users
export const getAllUsers = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_USERS,
      fetchPolicy: "network-only",
    });
    return data.getAllUsers;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("Error fetching users:", err.message);
    return { users: [], total: 0 };
  }
};

// Fetch cleaner applications
export const getCleanerApplications = async () => {
  try {
    const { data } = await client.query({
      query: GET_CLEANER_APPLICATIONS,
      fetchPolicy: "network-only",
    });
    return data.getCleanerApplications;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("Error fetching cleaner applications:", err.message);
    return { applications: [], total: 0 };
  }
};

