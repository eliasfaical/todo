import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  counters: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  countersText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 16,
  },

  countersValue: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#333333',
    marginLeft: 10,
    borderRadius: 50,
  },

  countersValueText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },

  descriptionFinished: {
    color: '#8284FA',
  },
});
