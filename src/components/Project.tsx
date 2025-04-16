
import React, { useState } from 'react';
import { ExternalLink, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  commentsCount: number;
}

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  link,
  commentsCount,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="card hover:cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center text-white justify-between">
                <span className="text-sm font-medium">View Details</span>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs">{commentsCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-navy-800 text-lg line-clamp-1">{title}</h3>
          <p className="mt-1 text-gray-600 text-sm line-clamp-2">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{title}</DialogTitle>
            <DialogDescription>
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="mr-2 mt-2">
                  {tag}
                </Badge>
              ))}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-2">
            <div className="rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="mt-4">
              <p className="text-gray-700">{description}</p>
            </div>
            
            <div className="mt-6 flex justify-between">
              {link && (
                <Button variant="outline" className="flex items-center" asChild>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button className="flex items-center bg-navy-700 hover:bg-navy-800">
                <MessageSquare className="mr-2 h-4 w-4" /> Add Comment
              </Button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-lg mb-3">Comments ({commentsCount})</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center">
                      <span className="text-navy-700 font-medium">JD</span>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">John Doe</p>
                        <span className="ml-2 text-xs text-gray-500">2 days ago</span>
                      </div>
                      <p className="mt-1 text-gray-700">
                        Great work on this project! I especially like the attention to detail in the UI design. Have you considered adding more interactive elements?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Project;
