import { gql } from '@apollo/client';

// ==================== USING ACTUAL BACKEND QUERIES ====================

// Get admin analytics (replaces getAdminStats)
export const GET_ADMIN_ANALYTICS = gql`
  query GetAdminAnalytics {
    adminAnalytics {
      totalCleaners
      totalCustomers
      totalUsers
      totalBookings
      completedBookings
      inProgressBookings
      confirmedBookings
      cancelledBookings
      totalRevenue
      avgBookingValue
      mostBookedCleaner {
        cleaner {
          id
          user { username firstName lastName }
        }
        bookingCount
      }
      mostBookedService {
        service { id name }
        bookingCount
      }
      totalCommunityPosts
      approvedPosts
      pendingPosts
      mostLikedPost {
        post { id }
        likeCount
      }
      totalLikes
      totalShares
      totalJobs
      totalOffers
      totalServices
    }
  }
`;

// Get all jobs from marketplace
export const GET_ALL_JOBS = gql`
  query GetAllJobs($status: String, $category: String) {
    allJobs(status: $status, category: $category) {
      id
      customer { id username email firstName lastName userType }
      serviceType { 
        id name icon description category
        minPrice maxPrice durationHours
      }
      title
      description
      images
      address
      postcode
      latitude
      longitude
      preferredDate
      estimatedHours
      customerOfferedPrice
      status
      isActive
      offerCount
      createdAt
      updatedAt
    }
  }
`;

// Get all services (system categories)
export const GET_ALL_SERVICES = gql`
  query GetCategories {
    categories {
      id
      name
      description
      minPrice
      maxPrice
      durationHours
      icon
      category
      tags
      isActive
      images
      includedFeatures
      createdAt
    }
  }
`;

// Get cleaner-created custom services
export const GET_CLEANER_SERVICES = gql`
  query GetCleanerServices {
    cleanerServices {
      id
      name
      description
      minPrice
      maxPrice
      durationHours
      icon
      category
      tags
      isActive
      images
      includedFeatures
      createdAt
      createdBy {
        id
        userProfile {
          id
          user {
            id
            username
            firstName
            lastName
            email
          }
        }
      }
    }
  }
`;

// Get all users for admin
export const GET_ALL_USERS_ADMIN = gql`
  query GetAllUsersAdmin {
    allUsers {
      id
      email
      firstName
      lastName
      username
      phone
      profilePhoto
      userType
      isVerified
      isActive
      dateJoined
      lastLogin
      customer {
        id
        totalBookings
        rating
      }
      cleaner {
        id
        rating
        totalJobsCompleted
        bio
        experienceYears
        specialties
      }
    }
  }
`;

// Get all offers/promotions
export const GET_ALL_OFFERS = gql`
  query GetAllOffers {
    all_offers {
      id
      title
      description
      code
      discountType
      discountValue
      originalPrice
      discountedPrice
      serviceType { id name }
      imageUrl
      validFrom
      validUntil
      isActive
      maxUses
      timesUsed
      isValid
    }
  }
`;

// Get all community posts
export const GET_ALL_COMMUNITY_POSTS = gql`
  query GetAllCommunityPosts {
    allCommunityPosts {
      id
      category
      contentDelta
      likesCount
      sharesCount
      viewsCount
      isPinned
      createdAt
      updatedAt
      author {
        id email firstName lastName
        username profilePhoto isVerified
      }
    }
  }
`;

// Get pending community posts (for moderation)
export const GET_PENDING_POSTS = gql`
  query GetPendingPosts {
    pendingPosts {
      id
      category
      contentDelta
      createdAt
      author {
        id username email
      }
    }
  }
`;

// Get all broadcasts
export const GET_ALL_BROADCASTS = gql`
  query GetAllBroadcasts {
    allBroadcasts {
      id
      message
      targetAudience
      createdAt
      readBy
      sender {
        id
        username
      }
    }
  }
`;

// Newsletter subscribers (website only - not in mobile app backend)
export const GET_ALL_SUBSCRIBERS = gql`
  query GetAllSubscribers {
    getAllSubscribers {
      subscribers {
        id
        email
        userType
        createdAt
        isActive
      }
      total
    }
  }
`;

// Enquiries (website only - not in mobile app backend)
export const GET_ALL_ENQUIRIES = gql`
  query GetAllEnquiries {
    getAllEnquiries {
      enquiries {
        id
        name
        email
        message
        serviceType
        createdAt
        status
      }
      total
    }
  }
`;

