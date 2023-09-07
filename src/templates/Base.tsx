import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';

import { Hero } from './Hero';

const Base = () => (
  <div className="antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <Hero /> */}
    {/* <VerticalFeatures /> */}
    {/* <Banner /> */}
    {/* <Footer /> */}
  </div>
);

export { Base };
