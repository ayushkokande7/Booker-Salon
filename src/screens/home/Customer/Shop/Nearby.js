import {Layout, HorzontalCard} from '../../../../components/UI';
import FlatListComponent from '../../../../components/Layout/FlatList';
const Nearby = () => {
  return (
    <Layout>
      <FlatListComponent
        renderItem={() => <HorzontalCard size={47} />}
        rows={true}
      />
    </Layout>
  );
};

export default Nearby;
