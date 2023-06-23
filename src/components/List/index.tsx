import {FlatList} from 'react-native';

import {Empty} from './Empty';
import {Header} from './Header';
import {Item} from './Item';
import {Task} from '../../screens/Home';

type Props = {
  data: Task[];
  removeTask: (taskIdToBeRemoved: number) => void;
  toggleTaskCheck: (taskIdToBeChecked: number) => void;
};

export function List({data, removeTask, toggleTaskCheck}: Props) {
  return (
    <>
      <Header />

      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            item={item}
            removeTask={removeTask}
            toggleTaskCheck={toggleTaskCheck}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={{paddingBottom: 24}}
      />
    </>
  );
}
