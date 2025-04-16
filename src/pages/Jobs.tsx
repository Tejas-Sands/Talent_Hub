
import React, { useState } from 'react';
import { Search, Filter, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobCard from '@/components/JobCard';
import FilterSidebar from '@/components/FilterSidebar';

// Mock data for jobs
const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    jobType: 'Full-time',
    salary: '$120k - $150k',
    postedDate: '2 days ago',
    logo: 'https://randomuser.me/api/portraits/men/1.jpg',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    jobType: 'Full-time',
    salary: '$90k - $110k',
    postedDate: '3 days ago',
    logo: 'https://randomuser.me/api/portraits/women/2.jpg',
    isNew: true,
    isFeatured: false,
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'GrowthStart',
    location: 'Remote',
    jobType: 'Full-time',
    salary: '$100k - $130k',
    postedDate: '5 days ago',
    logo: 'https://randomuser.me/api/portraits/men/3.jpg',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Backend Engineer',
    company: 'DataFlow',
    location: 'Boston, MA',
    jobType: 'Full-time',
    salary: '$110k - $140k',
    postedDate: '1 week ago',
    logo: 'https://randomuser.me/api/portraits/women/4.jpg',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'InnovateCo',
    location: 'Chicago, IL',
    jobType: 'Full-time',
    salary: '$130k - $160k',
    postedDate: '1 week ago',
    logo: 'https://randomuser.me/api/portraits/men/5.jpg',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudSystems',
    location: 'Seattle, WA',
    jobType: 'Full-time',
    salary: '$115k - $145k',
    postedDate: '2 weeks ago',
    logo: 'https://randomuser.me/api/portraits/women/6.jpg',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '7',
    title: 'Frontend Developer (Contract)',
    company: 'WebSolutions',
    location: 'Remote',
    jobType: 'Contract',
    salary: '$60 - $80/hr',
    postedDate: '2 weeks ago',
    logo: 'https://randomuser.me/api/portraits/men/7.jpg',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '8',
    title: 'Mobile Developer (iOS)',
    company: 'AppWorks',
    location: 'Austin, TX',
    jobType: 'Full-time',
    salary: '$100k - $130k',
    postedDate: '3 weeks ago',
    logo: 'https://randomuser.me/api/portraits/women/8.jpg',
    isNew: false,
    isFeatured: false,
  },
];

// Featured companies
const featuredCompanies = [
  { id: '1', name: 'Microsoft', logo: 'https://randomuser.me/api/portraits/men/20.jpg', jobCount: 15 },
  { id: '2', name: 'Google', logo: 'https://randomuser.me/api/portraits/men/21.jpg', jobCount: 12 },
  { id: '3', name: 'Amazon', logo: 'https://randomuser.me/api/portraits/men/22.jpg', jobCount: 18 },
  { id: '4', name: 'Netflix', logo: 'https://randomuser.me/api/portraits/men/23.jpg', jobCount: 8 },
  { id: '5', name: 'Apple', logo: 'https://randomuser.me/api/portraits/men/24.jpg', jobCount: 10 },
];

const JobsPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Find your next career opportunity
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Browse thousands of job listings from top companies across industries.
            </p>
            <div className="mt-10 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="text" 
                    placeholder="Job title, keyword, or company" 
                    className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-gray-700 focus:border-white text-white placeholder:text-gray-400 w-full"
                  />
                </div>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input 
                    type="text" 
                    placeholder="Location or Remote" 
                    className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-gray-700 focus:border-white text-white placeholder:text-gray-400 w-full"
                  />
                </div>
                <Button className="h-12 px-6 bg-white hover:bg-gray-100 text-navy-900">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Featured Companies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredCompanies.map((company) => (
              <div key={company.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full overflow-hidden mb-3">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-medium text-navy-900">{company.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{company.jobCount} open positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Job Listings */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Desktop */}
            <div className="hidden md:block md:w-64 lg:w-72 flex-shrink-0">
              <div className="sticky top-20">
                <FilterSidebar />
              </div>
            </div>

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
            <div className="flex-1">
              <Tabs defaultValue="all">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <TabsList className="mb-4 sm:mb-0 bg-white rounded-xl shadow-sm">
                    <TabsTrigger value="all">All Jobs</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="remote">Remote</TabsTrigger>
                    <TabsTrigger value="fulltime">Full Time</TabsTrigger>
                  </TabsList>
                  <div className="text-sm text-gray-500">Showing {mockJobs.length} jobs</div>
                </div>

                <TabsContent value="all" className="mt-0">
                  <div className="space-y-6">
                    {mockJobs.map((job) => (
                      <JobCard
                        key={job.id}
                        id={job.id}
                        title={job.title}
                        company={job.company}
                        location={job.location}
                        jobType={job.jobType}
                        salary={job.salary}
                        postedDate={job.postedDate}
                        logo={job.logo}
                        isNew={job.isNew}
                        isFeatured={job.isFeatured}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="featured" className="mt-0">
                  <div className="space-y-6">
                    {mockJobs
                      .filter(job => job.isFeatured)
                      .map((job) => (
                        <JobCard
                          key={job.id}
                          id={job.id}
                          title={job.title}
                          company={job.company}
                          location={job.location}
                          jobType={job.jobType}
                          salary={job.salary}
                          postedDate={job.postedDate}
                          logo={job.logo}
                          isNew={job.isNew}
                          isFeatured={job.isFeatured}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="remote" className="mt-0">
                  <div className="space-y-6">
                    {mockJobs
                      .filter(job => job.location === 'Remote')
                      .map((job) => (
                        <JobCard
                          key={job.id}
                          id={job.id}
                          title={job.title}
                          company={job.company}
                          location={job.location}
                          jobType={job.jobType}
                          salary={job.salary}
                          postedDate={job.postedDate}
                          logo={job.logo}
                          isNew={job.isNew}
                          isFeatured={job.isFeatured}
                        />
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="fulltime" className="mt-0">
                  <div className="space-y-6">
                    {mockJobs
                      .filter(job => job.jobType === 'Full-time')
                      .map((job) => (
                        <JobCard
                          key={job.id}
                          id={job.id}
                          title={job.title}
                          company={job.company}
                          location={job.location}
                          jobType={job.jobType}
                          salary={job.salary}
                          postedDate={job.postedDate}
                          logo={job.logo}
                          isNew={job.isNew}
                          isFeatured={job.isFeatured}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-10 flex justify-center">
                <Button variant="outline" className="flex items-center">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Are you hiring?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Post your job openings and find the perfect candidates for your team.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;
