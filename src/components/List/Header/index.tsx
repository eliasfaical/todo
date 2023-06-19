import {View} from 'react-native';

import {styles} from './styles';
import {Counter} from '../Counter';

export function Header() {
  return (
    <View style={styles.container}>
      <Counter value="8" description="Criadas" isFinished={false} />
      <Counter value="2" description="Concluídas" isFinished />
    </View>
  );
}
