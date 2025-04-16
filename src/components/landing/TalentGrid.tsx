
import React from 'react';
import { Plus, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileCard from '@/components/ProfileCard';
import FilterSidebar from '@/components/FilterSidebar';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface Profile {
  id: string;
  name: string;
  title: string;
  location: string;
  avatarUrl: string;
  skills: { id: string; name: string; }[];
}

interface TalentGridProps {
  profiles: Profile[];
  onCreateProfile: (profileData: any) => void;
  setIsCreateProfileOpen: (open: boolean) => void;
}

const TalentGrid: React.FC<TalentGridProps> = ({ profiles, onCreateProfile, setIsCreateProfileOpen }) => {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block md:w-64 lg:w-72 flex-shrink-0"
          >
            <div className="sticky top-20">
              <FilterSidebar />
            </div>
          </motion.div>

          {/* Mobile Filter Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsFilterVisible(true)}
              variant="outline"
              className="w-full flex items-center justify-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Mobile Filter Sidebar */}
          {isFilterVisible && (
            <FilterSidebar
              mobileSidebar
              onCloseMobile={() => setIsFilterVisible(false)}
            />
          )}

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Talented Professionals</h2>
              <div className="flex gap-4 items-center">
                <Button 
                  onClick={() => setIsCreateProfileOpen(true)}
                  className="flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white hover:scale-105 transition-all duration-300"
                >
                  <Plus className="h-4 w-4" />
                  Create Profile
                </Button>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Showing {profiles.length} results
                </div>
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {profiles.map((profile) => (
                <motion.div
                  key={profile.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <ProfileCard {...profile} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex justify-center"
            >
              <Button variant="outline" className="flex items-center hover:scale-105 transition-all duration-300">
                Load More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalentGrid;
