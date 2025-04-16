import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Mail, MapPin, Briefcase, Calendar, Link as LinkIcon, Github, Twitter, Linkedin, MessageSquare, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Project from '@/components/Project';

// Mock data for the profile
const mockProfile = {
  id: '1',
  name: 'Sarah Johnson',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  bio: 'Passionate frontend developer with 6+ years of experience creating responsive and intuitive user interfaces. Specialized in React, TypeScript, and modern CSS frameworks. Committed to writing clean, maintainable code and creating exceptional user experiences.',
  experience: '6+ years',
  availability: 'Available from July 2023',
  website: 'https://sarahjohnson.dev',
  github: 'sarahdev',
  twitter: 'sarahdevs',
  linkedin: 'sarah-johnson',
  skills: [
    { id: '1', name: 'React' },
    { id: '2', name: 'TypeScript' },
    { id: '3', name: 'JavaScript' },
    { id: '4', name: 'HTML/CSS' },
    { id: '5', name: 'Tailwind CSS' },
    { id: '6', name: 'Redux' },
    { id: '7', name: 'GraphQL' },
    { id: '8', name: 'Responsive Design' },
    { id: '9', name: 'UI/UX Principles' },
    { id: '10', name: 'Git' },
    { id: '11', name: 'Jest' },
    { id: '12', name: 'Cypress' },
  ],
  projects: [
    {
      id: '1',
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing. Built with React, TypeScript, and Chart.js.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1404&q=80',
      tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      link: 'https://example.com/project1',
      commentsCount: 5,
    },
    {
      id: '2',
      title: 'Social Media App',
      description: 'A social networking platform with real-time chat, post sharing, and user profiles. Implemented using React, Firebase, and styled-components.',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['React', 'Firebase', 'Styled Components', 'WebSockets'],
      link: 'https://example.com/project2',
      commentsCount: 3,
    },
    {
      id: '3',
      title: 'Task Management Tool',
      description: 'A Kanban-style project management application with drag-and-drop functionality, task assignments, and progress tracking.',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['TypeScript', 'React DnD', 'Redux', 'Node.js'],
      link: 'https://example.com/project3',
      commentsCount: 7,
    },
    {
      id: '4',
      title: 'Weather App',
      description: 'A weather application that provides real-time forecasts, historical data, and location-based weather alerts using the OpenWeather API.',
      imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['React', 'API Integration', 'Geolocation', 'CSS Modules'],
      link: 'https://example.com/project4',
      commentsCount: 2,
    },
    {
      id: '5',
      title: 'Personal Finance Tracker',
      description: 'A financial management app for tracking expenses, creating budgets, and visualizing spending habits with interactive charts.',
      imageUrl: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'D3.js', 'Firebase', 'PWA'],
      link: 'https://example.com/project5',
      commentsCount: 4,
    },
    {
      id: '6',
      title: 'Recipe Finder App',
      description: 'A web application for discovering recipes based on available ingredients, dietary restrictions, and cuisine preferences.',
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['React', 'External API', 'Responsive Design', 'Context API'],
      link: 'https://example.com/project6',
      commentsCount: 6,
    },
  ],
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const [isMessageSheetOpen, setIsMessageSheetOpen] = useState(false);
  
  // In a real app, we would fetch the profile data based on the id
  const profile = mockProfile;
  
  // Get initials for avatar fallback
  const initials = profile.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
    
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-navy-900 text-white pt-12 pb-24 px-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white">
              <AvatarImage src={profile.avatarUrl} alt={profile.name} />
              <AvatarFallback className="text-2xl bg-navy-100 text-navy-800">
                {initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white">{profile.name}</h1>
              <p className="text-xl text-gray-300 mt-1">{profile.title}</p>
              
              <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{profile.experience}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{profile.availability}</span>
                </div>
              </div>
            </div>
            
            <div className="flex mt-4 md:mt-0 gap-3">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10" 
                onClick={() => setIsMessageSheetOpen(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button className="bg-white text-navy-900 hover:bg-gray-100">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-navy-900 text-lg mb-4">About</h3>
              <p className="text-gray-700">{profile.bio}</p>
              
              <div className="mt-6 space-y-3">
                <a 
                  href={profile.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-navy-700 hover:text-navy-900"
                >
                  <LinkIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{profile.website.replace('https://', '')}</span>
                </a>
                <a 
                  href={`https://github.com/${profile.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-navy-700 hover:text-navy-900"
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span className="text-sm">{profile.github}</span>
                </a>
                <a 
                  href={`https://twitter.com/${profile.twitter}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-navy-700 hover:text-navy-900"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  <span className="text-sm">{profile.twitter}</span>
                </a>
                <a 
                  href={`https://linkedin.com/in/${profile.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-navy-700 hover:text-navy-900"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{profile.linkedin}</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-navy-900 text-lg mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill.id} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="projects">
              <TabsList className="bg-white rounded-xl shadow-sm mb-6">
                <TabsTrigger value="projects" className="text-base">Projects</TabsTrigger>
                <TabsTrigger value="experience" className="text-base">Experience</TabsTrigger>
                <TabsTrigger value="education" className="text-base">Education</TabsTrigger>
              </TabsList>
              
              <TabsContent value="projects" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profile.projects.map((project) => (
                    <Project
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      tags={project.tags}
                      link={project.link}
                      commentsCount={project.commentsCount}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="experience">
                <div className="bg-white rounded-xl shadow-sm p-6 space-y-8">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                      <span className="font-semibold text-navy-700">FB</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Senior Frontend Developer</h3>
                      <p className="text-gray-600">FinanceBoost • Full-time</p>
                      <p className="text-sm text-gray-500">Apr 2020 - Present • 3 yrs 2 mos</p>
                      <p className="mt-3 text-gray-700">
                        Lead frontend development for a financial analytics platform. Implemented new features, improved performance, and mentored junior developers.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                      <span className="font-semibold text-navy-700">TC</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Frontend Developer</h3>
                      <p className="text-gray-600">TechConnect • Full-time</p>
                      <p className="text-sm text-gray-500">Jun 2017 - Mar 2020 • 2 yrs 10 mos</p>
                      <p className="mt-3 text-gray-700">
                        Developed responsive web applications using React and Redux. Worked closely with UX designers to implement pixel-perfect interfaces.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                      <span className="font-semibold text-navy-700">SL</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Junior Web Developer</h3>
                      <p className="text-gray-600">StartupLab • Full-time</p>
                      <p className="text-sm text-gray-500">Aug 2015 - May 2017 • 1 yr 10 mos</p>
                      <p className="mt-3 text-gray-700">
                        Built and maintained websites for various clients using HTML, CSS, and JavaScript. Assisted in the transition to modern frameworks like React.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <div className="bg-white rounded-xl shadow-sm p-6 space-y-8">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                      <span className="font-semibold text-navy-700">SU</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Bachelor of Science in Computer Science</h3>
                      <p className="text-gray-600">Stanford University</p>
                      <p className="text-sm text-gray-500">2011 - 2015</p>
                      <p className="mt-3 text-gray-700">
                        Graduated with honors. Specialized in Human-Computer Interaction and Software Engineering.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-4">
                    <div className="h-12 w-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                      <span className="font-semibold text-navy-700">FE</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Advanced Frontend Development</h3>
                      <p className="text-gray-600">Frontend Masters</p>
                      <p className="text-sm text-gray-500">2016</p>
                      <p className="mt-3 text-gray-700">
                        Intensive program covering advanced React patterns, performance optimization, and modern CSS techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Message Sheet */}
      <Sheet open={isMessageSheetOpen} onOpenChange={setIsMessageSheetOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Message Sarah Johnson</SheetTitle>
            <SheetDescription>
              Send a direct message to discuss opportunities or ask questions.
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-navy-100 text-navy-800">
                      HR
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-sm">You</p>
                      <span className="ml-2 text-xs text-gray-500">Just now</span>
                    </div>
                    <p className="mt-1 text-gray-700 text-sm">
                      Hi Sarah, I'm impressed by your portfolio and would love to discuss a potential senior frontend position at our company. Are you currently open to new opportunities?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                    <AvatarFallback className="bg-navy-100 text-navy-800">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-sm">{profile.name}</p>
                      <span className="ml-2 text-xs text-gray-500">Just now</span>
                    </div>
                    <p className="mt-1 text-gray-700 text-sm">
                      Hello! Thank you for reaching out. Yes, I'm currently open to exploring new opportunities, especially in the frontend space. I'd be happy to discuss the position further.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-md flex items-center">
              <textarea 
                className="flex-1 p-3 border-0 focus:ring-0 focus:outline-none text-sm" 
                placeholder="Type your message here..."
                rows={3}
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsMessageSheetOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-navy-700 hover:bg-navy-800">
                Send Message
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProfilePage;
