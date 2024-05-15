import React from 'react';
import {Layout} from '../../../components/UI';
import {UserHeader, HeroSection} from '../../../components/UI';
import FlatList from '../../../components/Layout/FlatList';
import Categories from '../../../components/Layout/Categories';
import {HorzontalCard, VerticalCard} from '../../../components/UI';
// import {requestUserPermission} from '../../../utils/NotificationService';
const Home = () => {
  // requestUserPermission();
  return (
    <Layout>
      <UserHeader />
      <HeroSection />
      <Categories />
      <FlatList
        name="Nearby Shops"
        renderItem={() => <HorzontalCard />}
        horizontal
      />
      <FlatList name="Popular Jobers" renderItem={() => <VerticalCard />} />
    </Layout>
  );
};

export default Home;
