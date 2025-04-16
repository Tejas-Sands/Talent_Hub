
import React from 'react';
import { Calendar, Clock, MapPin, Briefcase, BookmarkPlus, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary?: string;
  postedDate: string;
  logo?: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  location,
  jobType,
  salary,
  postedDate,
  logo,
  isNew = false,
  isFeatured = false,
}) => {
  const handleApply = () => {
    toast.success("Application submitted successfully!");
  };

  const handleSave = () => {
    toast.success("Job saved successfully!");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard!");
  };

  return (
    <div className={`job-card group animate-fade-in hover:shadow-lg transition-all duration-300 ${
      isFeatured ? 'ring-2 ring-navy-400' : ''
    }`}>
      <div className="flex items-start gap-4">
        {logo ? (
          <div className="flex-shrink-0 h-12 w-12 rounded overflow-hidden bg-gray-100 flex items-center justify-center animate-scale-in">
            <img src={logo} alt={`${company} logo`} className="h-10 w-10 object-contain" />
          </div>
        ) : (
          <div className="flex-shrink-0 h-12 w-12 rounded bg-navy-100 flex items-center justify-center animate-scale-in">
            <span className="text-navy-700 font-medium text-lg">
              {company.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-navy-900 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="ml-auto flex space-x-2">
              {isNew && (
                <Badge variant="default" className="bg-green-500 hover:bg-green-600 animate-pulse">
                  New
                </Badge>
              )}
              {isFeatured && (
                <Badge variant="outline" className="text-navy-700 animate-scale-in">
                  Featured
                </Badge>
              )}
            </div>
          </div>
          <p className="text-gray-600 mt-1">{company}</p>
          
          <div className="mt-3 flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              <span>{jobType}</span>
            </div>
            {salary && (
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{salary}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{postedDate}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center gap-4">
        <Button 
          variant="default" 
          className="bg-navy-700 hover:bg-navy-800 hover:scale-105 transform transition-all duration-300 flex-1 sm:flex-initial"
          onClick={handleApply}
        >
          Apply Now
        </Button>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            className="hover:scale-105 transform transition-all duration-300"
            onClick={handleSave}
          >
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="hover:scale-105 transform transition-all duration-300"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
