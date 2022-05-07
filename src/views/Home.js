import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import background from '../assets/background/background.png'


const Home = () => {

  return (
    <div style={{
      background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center',
    }}>
      <Hero className="illustration-section" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </div>
  );
}

export default Home;