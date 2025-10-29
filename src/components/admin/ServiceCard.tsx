'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Edit, Eye, DollarSign, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import { Service } from '@/graphql/services/admin';

interface ServiceCardProps {
  service: Service;
  onDelete: (id: number) => void;
  onEdit?: (service: Service) => void;
  onView?: (service: Service) => void;
}

export default function ServiceCard({ service, onDelete, onEdit, onView }: ServiceCardProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete(service.id);
    setIsDeleting(false);
    setShowDeleteConfirm(false);
  };

  const imageUrl = service.images?.[0] || service.icon || '/placeholder-service.png';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all cursor-pointer relative group"
    >
      {/* Service Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        {service.images?.[0] ? (
          <Image
            src={imageUrl}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = '/placeholder-service.png';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {service.icon || '🧹'}
          </div>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            service.isActive 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {service.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm">
            {service.category || 'General'}
          </span>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-5">
        {/* Service Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
          {service.description}
        </p>

        {/* Price & Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-xs text-gray-500">Price Range</p>
              <p className="text-sm font-bold text-gray-900">
                ${service.minPrice || 0} - ${service.maxPrice || 0}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-bold text-gray-900">
                {service.durationHours || 0}h
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {service.tags.slice(0, 3).map((tag: string, index: number) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
            {service.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                +{service.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Creator Info */}
        {service.createdBy && (
          <div className="flex items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-sm">
              {service.createdBy.userProfile?.user?.username?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500">Created by</p>
              <p className="text-sm font-medium text-gray-900 truncate">
                {service.createdBy.userProfile?.user?.username || 'Admin'}
              </p>
            </div>
          </div>
        )}

        {/* Included Features */}
        {service.includedFeatures && service.includedFeatures.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Included Features:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              {service.includedFeatures.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-1">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Created Date */}
        <p className="text-xs text-gray-400 mb-4">
          Created: {new Date(service.createdAt).toLocaleDateString()}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {onView && (
            <button
              onClick={() => onView(service)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
            >
              <Eye className="w-4 h-4" />
              View
            </button>
          )}
          
          {onEdit && (
            <button
              onClick={() => onEdit(service)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <Edit className="w-4 h-4" />
              Edit
            </button>
          )}
          
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Service?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to delete &quot;{service.name}&quot;? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

