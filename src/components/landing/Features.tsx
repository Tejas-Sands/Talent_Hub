
import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white">Why TalentHub?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We connect exceptional talent with the right opportunities, making hiring and job searching simple and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<PortfolioIcon />}
            title="Portfolio Showcase"
            description="Browse detailed portfolios with real projects to evaluate skills and experience visually."
          />
          <FeatureCard
            icon={<HiringIcon />}
            title="Simplified Hiring"
            description="Streamlined application process with built-in messaging and feedback systems."
          />
          <FeatureCard
            icon={<CommunicationIcon />}
            title="Direct Communication"
            description="Engage directly with candidates through comments and private messaging."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

const PortfolioIcon = () => (
  <svg className="w-6 h-6 text-navy-700 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const HiringIcon = () => (
  <svg className="w-6 h-6 text-navy-700 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CommunicationIcon = () => (
  <svg className="w-6 h-6 text-navy-700 dark:text-navy-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
  </svg>
);

export default Features;
