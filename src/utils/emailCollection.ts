// Email collection utility - saves emails to localStorage and optionally to backend

export interface EmailSubscription {
  email: string;
  timestamp: string;
  source: string; // Which form submitted it
  userType?: string; // 'booker' or 'cleaner' if applicable
}

const STORAGE_KEY = 'pebble_email_subscriptions';

/**
 * Save email subscription to localStorage and optionally to backend
 */
export const saveEmailSubscription = async (
  email: string,
  source: string,
  userType: string = 'booker'
): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Invalid email address' };
    }

    // Get existing subscriptions from localStorage
    const existing = getStoredEmails();
    
    // Check if email already exists
    const emailExists = existing.some(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      return { success: true, message: 'Email already subscribed' };
    }

    // Create new subscription
    const newSubscription: EmailSubscription = {
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      source,
      userType,
    };

    // Add to array and save to localStorage
    const updated = [...existing, newSubscription];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Try to save to backend via GraphQL (optional, won't fail if backend is down)
    try {
      const { subscribeToNewsletter } = await import('@/graphql/services/NewsLetter');
      await subscribeToNewsletter(email, userType);
    } catch (error) {
      // Backend save failed, but localStorage save succeeded
      console.log('Backend save failed, email saved locally:', error);
    }

    return { success: true, message: 'Email subscribed successfully!' };
  } catch (error) {
    console.error('Error saving email subscription:', error);
    return { success: false, message: 'Failed to save email subscription' };
  }
};

/**
 * Get all stored email subscriptions from localStorage
 */
export const getStoredEmails = (): EmailSubscription[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as EmailSubscription[];
  } catch (error) {
    console.error('Error reading stored emails:', error);
    return [];
  }
};

/**
 * Clear all stored emails (admin function)
 */
export const clearStoredEmails = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
};

/**
 * Export emails as CSV
 */
export const exportEmailsAsCSV = (): string => {
  const emails = getStoredEmails();
  const headers = ['Email', 'Timestamp', 'Source', 'User Type'];
  const rows = emails.map(sub => [
    sub.email,
    sub.timestamp,
    sub.source,
    sub.userType || 'booker'
  ]);
  
  const csv = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
  
  return csv;
};

