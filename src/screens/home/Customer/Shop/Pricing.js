import {View} from 'react-native';
import {Layout} from '../../../../components/UI';
import PricingCard from '../../../../components/UI/PricingCard';

const Pricing = () => {
  console.log('pricing');
  return (
    <Layout padding>
      <PricingCard />
    </Layout>
  );
};

export default Pricing;
