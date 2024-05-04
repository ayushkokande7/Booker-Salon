import {Layout, HorzontalCard} from '../../../../components/UI';
import FlatListComponent from '../../../../components/Layout/FlatList';
const Nearby = () => {
  return (
    <Layout>
      <FlatListComponent Comp={<HorzontalCard size={45} />} />
    </Layout>
  );
};

export default Nearby;
