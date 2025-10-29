import { gql } from '@apollo/client';

// Get all subscribers
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

// Get all enquiries/contact form submissions
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

// Get all bookings
export const GET_ALL_BOOKINGS = gql`
  query GetAllBookings {
    getAllBookings {
      bookings {
        id
        name
        email
        phone
        address
        city
        postal
        serviceType
        subCategory
        date
        timeSlot
        frequency
        status
        createdAt
      }
      total
    }
  }
`;

// Get admin statistics
export const GET_ADMIN_STATS = gql`
  query GetAdminStats {
    getAdminStats {
      totalSubscribers
      totalBookers
      totalCleaners
      totalEnquiries
      totalBookings
      pendingBookings
      completedBookings
      newSubscribersThisMonth
      newEnquiriesThisMonth
      newBookingsThisMonth
      revenueThisMonth
      activeUsers
    }
  }
`;

// Get users list (from mobile app)
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      users {
        id
        name
        email
        phone
        userType
        isVerified
        createdAt
        lastLogin
        totalBookings
      }
      total
    }
  }
`;

// Get cleaner applications
export const GET_CLEANER_APPLICATIONS = gql`
  query GetCleanerApplications {
    getCleanerApplications {
      applications {
        id
        firstName
        lastName
        email
        phone
        experience
        availability
        status
        createdAt
      }
      total
    }
  }
`;

// Get all jobs
export const GET_ALL_JOBS = gql`
  query GetAllJobs {
    jobs {
      id
      title
      description
      status
      customerId
      cleanerId
      serviceType
      location
      scheduledDate
      completedDate
      price
      rating
      createdAt
      updatedAt
    }
  }
`;

// Get all services
export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services {
      id
      name
      description
      category
      basePrice
      duration
      isActive
      createdAt
      updatedAt
    }
  }
`;

// Get all transactions
export const GET_ALL_TRANSACTIONS = gql`
  query GetAllTransactions {
    transactions {
      id
      userId
      jobId
      amount
      status
      paymentMethod
      transactionDate
      createdAt
    }
  }
`;

// Get all reviews
export const GET_ALL_REVIEWS = gql`
  query GetAllReviews {
    reviews {
      id
      jobId
      customerId
      cleanerId
      rating
      comment
      createdAt
    }
  }
`;

