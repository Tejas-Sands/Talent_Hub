
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="bg-navy-800 dark:bg-navy-900 text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to showcase your talent?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Create your portfolio today and connect with top companies looking for your skills.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100">
              Create Your Portfolio
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Post a Job
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
