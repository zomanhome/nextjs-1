import { Meta } from '@/layout/Meta';
import Contacts from '@/templates/Contacts';
import Gallery from '@/templates/Gallery';
import { AppConfig } from '@/utils/AppConfig';

import Hero from './Hero';

const Base = () => (
  <div className="antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Gallery />
    <Contacts />
  </div>
);

export { Base };
