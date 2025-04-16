
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { BookmarkPlus } from 'lucide-react';
import { toast } from "sonner";
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface Skill {
  id: string;
  name: string;
}

interface ProfileCardProps {
  id: string;
  name: string;
  title: string;
  location: string;
  avatarUrl?: string;
  skills: Skill[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  title,
  location,
  avatarUrl,
  skills,
}) => {
  const { theme } = useTheme();
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  const handleSave = () => {
    toast.success("Profile saved successfully! (Demo)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className={`profile-card group ${
        theme === 'dark' ? 'bg-navy-800/50' : 'bg-white'
      } p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center space-x-4">
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Avatar className="h-16 w-16 animate-scale-in">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-navy-100 text-navy-800 dark:bg-navy-700 dark:text-white font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-navy-900 dark:text-white truncate group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{location}</p>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.slice(0, 3).map((skill) => (
          <motion.div
            key={skill.id}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge 
              variant="secondary" 
              className="font-normal animate-scale-in dark:bg-navy-700 dark:text-white"
            >
              {skill.name}
            </Badge>
          </motion.div>
        ))}
        {skills.length > 3 && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge 
              variant="outline" 
              className="font-normal animate-scale-in dark:border-gray-600 dark:text-gray-300"
            >
              +{skills.length - 3} more
            </Badge>
          </motion.div>
        )}
      </div>
      
      <div className="mt-6 flex justify-between items-center gap-4">
        <Link to={`/profile/${id}`} className="flex-1 sm:flex-initial">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="default" 
              size="sm"
              className="w-full sm:w-auto bg-navy-700 hover:bg-navy-800 dark:bg-navy-600 dark:hover:bg-navy-700 transition-all duration-300"
            >
              View Profile
            </Button>
          </motion.div>
        </Link>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleSave}
            className="transition-all duration-300 dark:text-white dark:hover:bg-navy-700/50"
          >
            <BookmarkPlus className="h-4 w-4 mr-2" />
            Save
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
