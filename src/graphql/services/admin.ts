import { client } from "@/lib/apollo-client";
import {
  GET_ALL_SUBSCRIBERS,
  GET_ALL_ENQUIRIES,
  GET_ADMIN_ANALYTICS,
  GET_ALL_JOBS,
  GET_ALL_SERVICES,
  GET_CLEANER_SERVICES,
  GET_ALL_USERS_ADMIN,
  GET_ALL_OFFERS,
  GET_ALL_COMMUNITY_POSTS,
  GET_PENDING_POSTS,
  GET_ALL_BROADCASTS,
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
  totalCleaners: number;
  totalCustomers: number;
  totalUsers: number;
  totalBookings: number;
  completedBookings: number;
  inProgressBookings: number;
  confirmedBookings: number;
  cancelledBookings: number;
  totalRevenue: number;
  avgBookingValue: number;
  totalCommunityPosts: number;
  approvedPosts: number;
  pendingPosts: number;
  totalLikes: number;
  totalShares: number;
  totalJobs: number;
  totalOffers: number;
  totalServices: number;
  mostBookedCleaner?: any;
  mostBookedService?: any;
  mostLikedPost?: any;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  profilePhoto: string;
  userType: string;
  isVerified: boolean;
  isActive: boolean;
  dateJoined: string;
  lastLogin: string;
  customer?: {
    id: number;
    totalBookings: number;
    rating: number;
  };
  cleaner?: {
    id: number;
    rating: number;
    totalJobsCompleted: number;
    bio: string;
    experienceYears: number;
    specialties: string[];
  };
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
  customer: any;
  serviceType: any;
  images: string[];
  address: string;
  postcode: string;
  latitude: number;
  longitude: number;
  preferredDate: string;
  estimatedHours: number;
  customerOfferedPrice: number;
  isActive: boolean;
  offerCount: number;
  createdAt: string;
  updatedAt: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  durationHours: number;
  icon: string;
  tags: string[];
  isActive: boolean;
  images: string[];
  includedFeatures: string[];
  createdAt: string;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  code: string;
  discountType: string;
  discountValue: number;
  originalPrice: number;
  discountedPrice: number;
  serviceType: any;
  imageUrl: string;
  validFrom: string;
  validUntil: string;
  isActive: boolean;
  maxUses: number;
  timesUsed: number;
  isValid: boolean;
};

export type CommunityPost = {
  id: number;
  category: string;
  contentDelta: string;
  likesCount: number;
  sharesCount: number;
  viewsCount: number;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  author: any;
};

export type Broadcast = {
  id: string;
  message: string;
  targetAudience: string;
  createdAt: string;
  readBy: any[];
  sender: any;
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

// Note: Backend doesn't have a direct "getAllBookings" admin query
// Bookings are accessed per user via myBookings
// For now, return empty until backend adds admin bookings query
export const getAllBookings = async () => {
  console.warn("getAllBookings - Backend uses myBookings (per user), no admin query available");
  return { bookings: [], total: 0 };
};

// Fetch admin analytics
export const getAdminStats = async () => {
  try {
    console.log("🔍 Fetching admin analytics from backend...");
    const { data, errors } = await client.query({
      query: GET_ADMIN_ANALYTICS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    
    if (errors) {
      console.error("❌ Admin analytics query errors:", errors);
    }
    
    if (data?.adminAnalytics) {
      console.log("✅ Admin analytics fetched successfully:", data.adminAnalytics);
      return data.adminAnalytics;
    }
    
    console.warn("⚠️ No admin analytics data returned from backend");
    return null;
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("❌ Admin analytics query failed:", err.message, err.graphQLErrors);
    return null;
  }
};

// Fetch all users (admin query)
export const getAllUsers = async () => {
  try {
    console.log("🔍 Fetching all users from backend...");
    const { data, errors } = await client.query({
      query: GET_ALL_USERS_ADMIN,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    
    if (errors) {
      console.error("❌ Users query errors:", errors);
    }
    
    if (data?.allUsers) {
      console.log("✅ Users fetched successfully:", data.allUsers.length, "users");
      return { users: data.allUsers, total: data.allUsers.length };
    }
    
    console.warn("⚠️ No users data returned from backend");
    return { users: [], total: 0 };
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("❌ Users query failed:", err.message, err.graphQLErrors);
    return { users: [], total: 0 };
  }
};

// Note: Backend doesn't have cleaner applications query
// Applications might be handled differently in the mobile app
export const getCleanerApplications = async () => {
  console.warn("getCleanerApplications - Not available in mobile backend schema");
  return { applications: [], total: 0 };
};

// Fetch all jobs from marketplace
export const getAllJobs = async () => {
  try {
    console.log("🔍 Fetching jobs from backend...");
    const { data, errors } = await client.query({
      query: GET_ALL_JOBS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    
    if (errors) {
      console.error("❌ Jobs query errors:", errors);
    }
    
    if (data?.allJobs) {
      console.log("✅ Jobs fetched successfully:", data.allJobs.length, "jobs");
      return data.allJobs;
    }
    
    console.warn("⚠️ No jobs data returned from backend");
    return [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("❌ Jobs query failed:", err.message, err.graphQLErrors);
    return [];
  }
};

// Fetch all services (system categories)
export const getAllServices = async () => {
  try {
    console.log("🔍 Fetching system categories from backend...");
    const { data, errors } = await client.query({
      query: GET_ALL_SERVICES,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    
    if (errors) {
      console.error("❌ Categories query errors:", errors);
    }
    
    if (data?.categories) {
      console.log("✅ System categories fetched:", data.categories.length, "categories");
      return data.categories;
    }
    
    console.warn("⚠️ No categories data returned");
    return [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("❌ Categories query failed:", err.message, err.graphQLErrors);
    return [];
  }
};

// Fetch cleaner-created custom services
export const getCleanerServices = async () => {
  try {
    console.log("🔍 Fetching cleaner services from backend...");
    const { data, errors } = await client.query({
      query: GET_CLEANER_SERVICES,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    
    if (errors) {
      console.error("❌ Cleaner services query errors:", errors);
    }
    
    if (data?.cleanerServices) {
      console.log("✅ Cleaner services fetched:", data.cleanerServices.length, "custom services");
      return data.cleanerServices;
    }
    
    console.warn("⚠️ No cleaner services data returned");
    return [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.error("❌ Cleaner services query failed:", err.message, err.graphQLErrors);
    return [];
  }
};

// Fetch all offers/promotions
export const getAllOffers = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_OFFERS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.all_offers || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Offers query failed:", err.message);
    return [];
  }
};

// Fetch all community posts
export const getAllCommunityPosts = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_COMMUNITY_POSTS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.allCommunityPosts || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Community posts query failed:", err.message);
    return [];
  }
};

// Fetch pending community posts
export const getPendingPosts = async () => {
  try {
    const { data } = await client.query({
      query: GET_PENDING_POSTS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.pendingPosts || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Pending posts query failed:", err.message);
    return [];
  }
};

// Fetch all broadcasts
export const getAllBroadcasts = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_BROADCASTS,
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    });
    return data?.allBroadcasts || [];
  } catch (error: unknown) {
    const err = error as ApolloError;
    console.warn("Broadcasts query failed:", err.message);
    return [];
  }
};

