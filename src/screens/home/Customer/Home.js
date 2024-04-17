import React from 'react';
import {Layout} from '../../../components/UI';
import {UserHeader, HeroSection} from '../../../components/UI';
import NearByShop from '../../../components/Layout/NearByShop';
import Categories from '../../../components/Layout/Categories';
const Home = () => {
  return (
    <Layout>
      <UserHeader />
      <HeroSection />
      <Categories />
      {/* <NearByShop /> */}
    </Layout>
  );
};

export default Home;
