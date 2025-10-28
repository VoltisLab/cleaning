'use client';
import React, { useState } from 'react';
import { 
  Lightbulb, 
  Video, 
  Star, 
  Award, 
  TrendingUp, 
  Heart,
  MessageSquare,
  Share2,
  Filter,
  Search,
  CheckCircle,
  Clock,
  Eye,
  ThumbsUp,
  Play,
  Sparkles,
  Trophy,
  Users,
  Calendar
} from 'lucide-react';
import Banner from '@/components/shared/Banner';
import Image from 'next/image';

const CommunityPage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tips' | 'videos' | 'featured'>('all');

  // Sample featured cleaners
  const featuredCleaners = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: '/landing/team/team1.png',
      rating: 4.9,
      totalBookings: 247,
      experience: '5 years',
      specialty: 'Deep Cleaning Specialist',
      achievement: 'Top Performer - January 2025',
      reviewCount: 189
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: '/landing/team/team2.png',
      rating: 4.8,
      totalBookings: 312,
      experience: '7 years',
      specialty: 'Commercial Cleaning Expert',
      achievement: 'Most Bookings This Month',
      reviewCount: 245
    },
    {
      id: 3,
      name: 'Emma Williams',
      image: '/landing/team/team3.png',
      rating: 5.0,
      totalBookings: 198,
      experience: '4 years',
      specialty: 'Eco-Friendly Cleaning',
      achievement: 'Perfect 5-Star Rating',
      reviewCount: 198
    }
  ];

  // Sample community posts
  const communityPosts = [
    {
      id: 1,
      type: 'tip',
      author: 'Pebble Team',
      authorImage: '/landing/header/logo.png',
      title: 'The Magic of Baking Soda: 10 Cleaning Hacks You Need to Know',
      excerpt: 'Baking soda is one of the most versatile cleaning agents. Here are our top 10 ways to use it for a spotless home...',
      content: 'From deodorizing carpets to cleaning ovens, baking soda is a natural powerhouse. Mix with vinegar for tough stains, sprinkle on mattresses to freshen them up, and use as a gentle scrub for delicate surfaces.',
      image: '/landing/news/cleaner.png',
      likes: 342,
      comments: 45,
      views: 1250,
      date: 'Jan 25, 2025',
      verified: true,
      tags: ['Natural Cleaning', 'Budget-Friendly', 'Kitchen']
    },
    {
      id: 2,
      type: 'video',
      author: 'Sarah Johnson',
      authorImage: '/landing/team/team1.png',
      title: 'How to Deep Clean a Bathroom in Under 30 Minutes',
      excerpt: 'Professional cleaner Sarah shares her efficient bathroom cleaning routine that saves time without compromising quality...',
      duration: '12:45',
      image: '/about/cleaner.png',
      likes: 567,
      comments: 89,
      views: 3420,
      date: 'Jan 23, 2025',
      verified: true,
      tags: ['Video Tutorial', 'Time-Saving', 'Bathroom']
    },
    {
      id: 3,
      type: 'tip',
      author: 'Michael Chen',
      authorImage: '/landing/team/team2.png',
      title: 'Commercial Kitchen Cleaning: Industry Secrets',
      excerpt: 'Learn the professional techniques used in commercial kitchens to maintain hygiene standards...',
      content: 'Start from the top and work your way down. Always clean exhaust hoods first, then surfaces, and floors last. Use color-coded cloths to prevent cross-contamination.',
      image: '/cleaning-services/beautiful.jpg',
      likes: 423,
      comments: 67,
      views: 2100,
      date: 'Jan 20, 2025',
      verified: true,
      tags: ['Commercial', 'Kitchen', 'Professional Tips']
    },
    {
      id: 4,
      type: 'tip',
      author: 'Pebble Team',
      authorImage: '/landing/header/logo.png',
      title: 'Eco-Friendly Cleaning Solutions You Can Make at Home',
      excerpt: 'Save money and protect the environment with these DIY cleaning solutions using natural ingredients...',
      content: 'Mix equal parts water and white vinegar for an all-purpose cleaner. Add essential oils for a pleasant scent. Lemon juice works wonders on hard water stains and adds a fresh fragrance.',
      image: '/landing/news/1.png',
      likes: 289,
      comments: 34,
      views: 1800,
      date: 'Jan 18, 2025',
      verified: true,
      tags: ['Eco-Friendly', 'DIY', 'Natural Cleaning']
    },
    {
      id: 5,
      type: 'video',
      author: 'Emma Williams',
      authorImage: '/landing/team/team3.png',
      title: 'Window Cleaning Like a Pro: No Streaks Guaranteed',
      excerpt: 'Learn the professional window cleaning technique that leaves zero streaks every single time...',
      duration: '8:30',
      image: '/landing/news/2.png',
      likes: 445,
      comments: 52,
      views: 2890,
      date: 'Jan 15, 2025',
      verified: true,
      tags: ['Video Tutorial', 'Windows', 'Professional Tips']
    },
    {
      id: 6,
      type: 'tip',
      author: 'Pebble Team',
      authorImage: '/landing/header/logo.png',
      title: 'How to Remove Stubborn Carpet Stains: A Complete Guide',
      excerpt: 'From wine spills to pet accidents, here\'s how to tackle the toughest carpet stains effectively...',
      content: 'Always blot, never rub! Rubbing pushes the stain deeper into the fibers. For fresh stains, use cold water and work from the outside in. For set-in stains, try a mixture of dish soap and hydrogen peroxide.',
      image: '/cleaning-services/scrub-floor.png',
      likes: 512,
      comments: 78,
      views: 3200,
      date: 'Jan 12, 2025',
      verified: true,
      tags: ['Stain Removal', 'Carpets', 'Problem-Solving']
    }
  ];

  const filteredPosts = communityPosts.filter(post => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'tips') return post.type === 'tip';
    if (activeFilter === 'videos') return post.type === 'video';
    if (activeFilter === 'featured') return post.author === 'Pebble Team';
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Banner page='Community' />

      {/* Content */}
      <div className="max-w-[1280px] mx-auto px-4 xl:px-8 py-12">
        
        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Pebble
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
              Cleaning Community
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover expert tips, watch helpful tutorials, and learn from the best cleaners in the industry. Share your knowledge and connect with fellow cleaning professionals.
          </p>
        </div>

        {/* Featured Cleaners Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#4977E5]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Cleaners</h2>
            </div>
            <Sparkles className="w-6 h-6 text-[#4977E5]" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredCleaners.map((cleaner) => (
              <div key={cleaner.id} className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:border-[#4977E5] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  {/* Achievement Badge */}
                  <div className="mb-4 bg-[#4977E5] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{cleaner.achievement}</span>
                  </div>

                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={cleaner.image}
                        alt={cleaner.name}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#4977E5] rounded-full p-2">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cleaner.name}</h3>
                  <p className="text-[#4977E5] font-semibold mb-4">{cleaner.specialty}</p>

                  {/* Stats */}
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm text-gray-600">Rating</span>
                      </div>
                      <span className="font-bold text-gray-900">{cleaner.rating}/5.0</span>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-[#4977E5]" />
                        <span className="text-sm text-gray-600">Bookings</span>
                      </div>
                      <span className="font-bold text-gray-900">{cleaner.totalBookings}</span>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#4977E5]" />
                        <span className="text-sm text-gray-600">Experience</span>
                      </div>
                      <span className="font-bold text-gray-900">{cleaner.experience}</span>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-[#4977E5]" />
                        <span className="text-sm text-gray-600">Reviews</span>
                      </div>
                      <span className="font-bold text-gray-900">{cleaner.reviewCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Posts Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-[#4977E5]" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tips & Tutorials</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-[#4977E5] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Posts
              </button>
              <button
                onClick={() => setActiveFilter('tips')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === 'tips'
                    ? 'bg-[#4977E5] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                Tips & Tricks
              </button>
              <button
                onClick={() => setActiveFilter('videos')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === 'videos'
                    ? 'bg-[#4977E5] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Video className="w-4 h-4" />
                Videos
              </button>
              <button
                onClick={() => setActiveFilter('featured')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === 'featured'
                    ? 'bg-[#4977E5] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Star className="w-4 h-4" />
                Pebble Posts
              </button>
            </div>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-[#4977E5] rounded-r-xl p-5 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#4977E5] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">All Posts Are Verified</h4>
                <p className="text-gray-700 text-sm">
                  Every community post is carefully reviewed and approved by the Pebble team to ensure quality, accuracy, and helpfulness. Share your expertise and contribute to our growing knowledge base!
                </p>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#4977E5]">
                {/* Post Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  {post.type === 'video' && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-[#4977E5]" />
                      </div>
                    </div>
                  )}
                  {post.type === 'video' && (
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.duration}
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    {post.type === 'tip' ? (
                      <div className="bg-[#4977E5] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Lightbulb className="w-3 h-3" />
                        Tip
                      </div>
                    ) : (
                      <div className="bg-[#4977E5] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        Video
                      </div>
                    )}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 relative">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        {post.verified && (
                          <CheckCircle className="w-4 h-4 text-[#4977E5]" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-50 text-[#4977E5] px-3 py-1 rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm font-semibold">{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-semibold">{post.views}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#4977E5] transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-2xl p-8 md:p-12 text-white text-center">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Want to Share Your Expertise?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If you're a verified Pebble cleaner, you can submit your own tips, tricks, and video tutorials to help the community. All submissions are reviewed by our team before publishing.
          </p>
          <button className="bg-white text-[#4977E5] font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            Submit Your Content
          </button>
          <p className="mt-4 text-blue-100 text-sm">
            Must be a verified service provider to submit content
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;

