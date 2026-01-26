import React from 'react';
import { AlertCircle } from 'lucide-react';

const UrgencyBanner: React.FC = () => {
  return (
    <div className="bg-red-50 border-b border-red-100 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 text-red-800 text-xs sm:text-sm font-medium">
        <AlertCircle className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <span className="truncate">
          <strong>Urgent Update:</strong> 4,200+ ADA website lawsuits filed in 2024. Small businesses are now primary targets.
        </span>
      </div>
    </div>
  );
};

export default UrgencyBanner;
