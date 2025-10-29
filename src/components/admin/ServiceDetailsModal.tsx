'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, DollarSign, Clock, Tag, User, Calendar, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

import { Service } from '@/graphql/services/admin';

interface ServiceDetailsModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceDetailsModal({ service, onClose }: ServiceDetailsModalProps) {
  if (!service) return null;

  const imageUrl = service.images?.[0] || service.icon || '/placeholder-service.png';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8"
        >
          {/* Header with Image */}
          <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50">
            {service.images?.[0] ? (
              <Image
                src={imageUrl}
                alt={service.name}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-service.png';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl">
                {service.icon || '🧹'}
              </div>
            )}
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                service.isActive 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {service.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title & Category */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                {service.category || 'General'}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Price Range</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${service.minPrice || 0} - ${service.maxPrice || 0}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="text-xl font-bold text-gray-900">
                      {service.durationHours || 0} hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Created</p>
                    <p className="text-lg font-bold text-gray-900">
                      {new Date(service.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creator Info */}
            {service.createdBy && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Created By
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-2xl">
                    {service.createdBy.userProfile?.user?.username?.charAt(0).toUpperCase() || 'A'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {service.createdBy.userProfile?.user?.username || 'Admin'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {service.createdBy.userProfile?.user?.email || 'admin@pebble.com'}
                    </p>
                    <p className="text-xs text-gray-500">
                      ID: {service.createdBy.id}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            {service.tags && service.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag: string, index: number) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Included Features */}
            {service.includedFeatures && service.includedFeatures.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Included Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.includedFeatures.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images */}
            {service.images && service.images.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gallery</h3>
                <div className="grid grid-cols-3 gap-4">
                  {service.images.map((img: string, index: number) => (
                    <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${service.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

