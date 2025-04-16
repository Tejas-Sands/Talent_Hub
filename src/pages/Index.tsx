import React, { useState } from 'react';
import { CreateProfileDialog } from '@/components/CreateProfileDialog';
import { toast } from 'sonner';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import CTA from '@/components/landing/CTA';
import TalentGrid from '@/components/landing/TalentGrid';

const mockProfiles = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: [
      { id: '1', name: 'React' },
      { id: '2', name: 'TypeScript' },
      { id: '3', name: 'Tailwind CSS' },
      { id: '4', name: 'GraphQL' },
    ],
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'UI/UX Designer',
    location: 'New York, NY',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    skills: [
      { id: '5', name: 'Figma' },
      { id: '6', name: 'User Research' },
      { id: '7', name: 'UI Design' },
      { id: '8', name: 'Prototyping' },
    ],
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Full Stack Developer',
    location: 'Austin, TX',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    skills: [
      { id: '9', name: 'JavaScript' },
      { id: '10', name: 'Node.js' },
      { id: '11', name: 'React' },
      { id: '12', name: 'MongoDB' },
    ],
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Frontend Engineer',
    location: 'Seattle, WA',
    avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    skills: [
      { id: '13', name: 'Vue.js' },
      { id: '14', name: 'CSS' },
      { id: '15', name: 'JavaScript' },
      { id: '16', name: 'Responsive Design' },
    ],
  },
  {
    id: '5',
    name: 'Lisa Wang',
    title: 'Backend Developer',
    location: 'Remote',
    avatarUrl: 'https://randomuser.me/api/portraits/women/79.jpg',
    skills: [
      { id: '17', name: 'Python' },
      { id: '18', name: 'Django' },
      { id: '19', name: 'SQL' },
      { id: '20', name: 'Docker' },
    ],
  },
  {
    id: '6',
    name: 'James Wilson',
    title: 'DevOps Engineer',
    location: 'Chicago, IL',
    avatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
    skills: [
      { id: '21', name: 'AWS' },
      { id: '22', name: 'CI/CD' },
      { id: '23', name: 'Kubernetes' },
      { id: '24', name: 'Terraform' },
    ],
  },
];

const Index = () => {
  const [isCreateProfileOpen, setIsCreateProfileOpen] = useState(false);
  const [profiles, setProfiles] = useState(mockProfiles);

  const handleCreateProfile = (profileData: any) => {
    const newProfile = {
      id: (profiles.length + 1).toString(),
      ...profileData,
      skills: profileData.skills.map((skill: string, index: number) => ({
        id: `new-${index}`,
        name: skill
      }))
    };
    setProfiles([...profiles, newProfile]);
    toast.success("Profile created successfully!");
    setIsCreateProfileOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Hero />
      <TalentGrid 
        profiles={profiles}
        onCreateProfile={handleCreateProfile}
        setIsCreateProfileOpen={setIsCreateProfileOpen}
      />
      <Features />
      <CTA />
      
      <CreateProfileDialog
        open={isCreateProfileOpen}
        onOpenChange={setIsCreateProfileOpen}
        onSubmit={handleCreateProfile}
      />
    </div>
  );
};

export default Index;
