// app/discover/page.tsx
import FeatureSection from '@/app/components/FeatureSection';
import ToolSection from '@/app/components/ToolSection';
import { homeContent } from '@/app/data/homeContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover',
};

const DiscoverPage = () => {
  return (
    <div className='container_body'>
      <div>
        {
          homeContent.featureSections.map((section, index) => (
            <FeatureSection key={index} {...section} />
          ))
        }

        < ToolSection {...homeContent.toolSection} />
      </div>
    </div>
  );
};

export default DiscoverPage;