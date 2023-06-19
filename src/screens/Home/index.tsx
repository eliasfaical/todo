import {Feather} from '@expo/vector-icons';
import {useState} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {Button} from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {List} from '../../components/List';

export default function Home() {
  const [newTaskValue, setNewTaskValue] = useState('');

  function addTask() {
    console.log('Add');
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Input value={newTaskValue} onChangeText={setNewTaskValue} />
          <Button onPress={addTask}>
            <Feather name="plus-circle" size={25} color="#F2F2F2" />
          </Button>
        </View>

        <List />
      </View>
    </View>
  );
}
