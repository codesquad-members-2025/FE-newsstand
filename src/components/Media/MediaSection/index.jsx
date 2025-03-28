import ListView from './ListView';
import GridView from './GridView';

const MedaiSection = ({ isListView }) => {
  return <> {isListView ? <ListView /> : <GridView />} </>;
};

export default MedaiSection;
