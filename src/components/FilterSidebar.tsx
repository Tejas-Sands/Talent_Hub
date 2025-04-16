
import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface FilterSidebarProps {
  className?: string;
  mobileSidebar?: boolean;
  onCloseMobile?: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  className, 
  mobileSidebar = false,
  onCloseMobile
}) => {
  const [experienceYears, setExperienceYears] = useState([0, 10]);

  const jobTypes = [
    { id: 'full-time', label: 'Full-time' },
    { id: 'part-time', label: 'Part-time' },
    { id: 'contract', label: 'Contract' },
    { id: 'freelance', label: 'Freelance' },
    { id: 'internship', label: 'Internship' },
  ];

  const skills = [
    { id: 'react', label: 'React' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'python', label: 'Python' },
    { id: 'java', label: 'Java' },
    { id: 'node', label: 'Node.js' },
    { id: 'sql', label: 'SQL' },
    { id: 'aws', label: 'AWS' },
    { id: 'docker', label: 'Docker' },
  ];

  const locations = [
    { id: 'remote', label: 'Remote' },
    { id: 'us', label: 'United States' },
    { id: 'uk', label: 'United Kingdom' },
    { id: 'eu', label: 'Europe' },
    { id: 'asia', label: 'Asia' },
  ];

  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 dark:bg-slate-900 overflow-hidden h-full flex flex-col",
      mobileSidebar ? "fixed inset-y-0 right-0 z-50 w-full max-w-xs shadow-xl animate-slide-in sm:max-w-sm" : "",
      className
    )}>
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="font-semibold text-navy-900 flex items-center">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </h3>
        {mobileSidebar && onCloseMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onCloseMobile}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="overflow-y-auto flex-1 p-4">
        <div className="space-y-6">
          {/* Search */}
          <div>
            <Label htmlFor="keyword" className="text-sm font-medium mb-1.5 block">
              Keywords
            </Label>
            <Input id="keyword" placeholder="Search by keyword" />
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="text-sm font-medium mb-1.5 block">
              Location
            </Label>
            <Input id="location" placeholder="City, state, or zip" />
          </div>

          {/* Experience Level */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <Label htmlFor="experience" className="text-sm font-medium">
                Experience Level
              </Label>
              <span className="text-sm text-gray-500">
                {experienceYears[0]} - {experienceYears[1]} years
              </span>
            </div>
            <Slider
              id="experience"
              value={experienceYears}
              min={0}
              max={15}
              step={1}
              onValueChange={setExperienceYears}
              className="my-6"
            />
          </div>

          <Separator />

          {/* Job Type */}
          <div>
            <h4 className="text-sm font-medium mb-2">Job Type</h4>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox id={`job-type-${type.id}`} />
                  <Label htmlFor={`job-type-${type.id}`} className="text-sm font-normal cursor-pointer">
                    {type.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Skills */}
          <div>
            <h4 className="text-sm font-medium mb-2">Skills</h4>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center space-x-2">
                  <Checkbox id={`skill-${skill.id}`} />
                  <Label htmlFor={`skill-${skill.id}`} className="text-sm font-normal cursor-pointer">
                    {skill.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Location */}
          <div>
            <h4 className="text-sm font-medium mb-2">Location</h4>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-2">
                  <Checkbox id={`location-${location.id}`} />
                  <Label htmlFor={`location-${location.id}`} className="text-sm font-normal cursor-pointer">
                    {location.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50 flex space-x-3">
        <Button variant="default" className="flex-1 bg-navy-700 hover:bg-navy-800">
          Apply Filters
        </Button>
        <Button variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
