import { client } from "@/lib/apollo-client";
import {
  GET_ALL_SUBSCRIBERS,
  GET_ALL_ENQUIRIES,
  GET_ALL_BOOKINGS,
  GET_ADMIN_STATS,
  GET_ALL_USERS,
  GET_CLEANER_APPLICATIONS,
  GET_ALL_JOBS,
  GET_ALL_SERVICES,
  GET_ALL_TRANSACTIONS,
  GET_ALL_REVIEWS,
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

export type Job = {
  id: string;
  title: string;
  description: string;
  status: string;
  customerId: string;
  cleanerId: string;
  serviceType: string;
  location: string;
  scheduledDate: string;
  completedDate: string;
  price: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  category: string;
  basePrice: number;
  duration: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Transaction = {
  id: string;
  userId: string;
  jobId: string;
  amount: number;
  status: string;
  paymentMethod: string;
  transactionDate: string;
  createdAt: string;
};

export type Review = {
  id: string;
  jobId: string;
  customerId: string;
  cleanerId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

// Fetch all subscribers
export const getAllSubscribers = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_SUBSCRIBERS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.getAllSubscribers || { subscribers: [], total: 0 };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Subscribers query not available on backend:", err.message);
    return { subscribers: [], total: 0 };
  }
};

// Fetch all enquiries
export const getAllEnquiries = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_ENQUIRIES,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.getAllEnquiries || { enquiries: [], total: 0 };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Enquiries query not available on backend:", err.message);
    return { enquiries: [], total: 0 };
  }
};

// Fetch all bookings
export const getAllBookings = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_BOOKINGS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.getAllBookings || { bookings: [], total: 0 };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Bookings query not available on backend:", err.message);
    return { bookings: [], total: 0 };
  }
};

// Fetch admin statistics
export const getAdminStats = async () => {
  try {
    const { data } = await client.query({
      query: GET_ADMIN_STATS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.getAdminStats || null;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Admin stats query not available on backend:", err.message);
    return null;
  }
};

// Fetch all users
export const getAllUsers = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_USERS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.getAllUsers || { users: [], total: 0 };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Users query not available on backend:", err.message);
    return { users: [], total: 0 };
  }
};

// Fetch cleaner applications
export const getCleanerApplications = async () => {
  try {
    const { data } = await client.query({
      query: GET_CLEANER_APPLICATIONS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.getCleanerApplications || { applications: [], total: 0 };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Cleaner applications query not available on backend:", err.message);
    return { applications: [], total: 0 };
  }
};

// Fetch all jobs
export const getAllJobs = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_JOBS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.jobs || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Jobs query not available on backend:", err.message);
    return [];
  }
};

// Fetch all services
export const getAllServices = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_SERVICES,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.services || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Services query not available on backend:", err.message);
    return [];
  }
};

// Fetch all transactions
export const getAllTransactions = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_TRANSACTIONS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.transactions || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Transactions query not available on backend:", err.message);
    return [];
  }
};

// Fetch all reviews
export const getAllReviews = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_REVIEWS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.reviews || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Reviews query not available on backend:", err.message);
    return [];
  }
};

