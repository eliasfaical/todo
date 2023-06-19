import {View, Text} from 'react-native';

import {styles} from './styles';

type Props = {
  description: string;
  value: string;
  isFinished: boolean;
};

export function Counter({value, description, isFinished}: Props) {
  return (
    <View style={styles.counters}>
      <Text
        style={
          isFinished
            ? {...styles.countersText, ...styles.descriptionFinished}
            : styles.countersText
        }>
        {description}
      </Text>

      <View style={styles.countersValue}>
        <Text style={styles.countersValueText}>{value}</Text>
      </View>
    </View>
  );
}
