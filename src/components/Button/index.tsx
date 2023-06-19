import {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

import {styles} from './styles';

type Props = {
  children: ReactNode;
  onPress: () => void;
};

export function Button({children, onPress}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.6}>
      {children}
    </TouchableOpacity>
  );
}
