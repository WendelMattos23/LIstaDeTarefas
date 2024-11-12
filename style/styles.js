import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2B2B2B', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9', 
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#3A3A3A', 
    color: '#E0E0E0',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#505050', 
    backgroundColor: '#1C1C1C', 
  },
  listItemText: {
    color: '#E0E0E0', 
  },
  selectedItem: {
    backgroundColor: '#5A5A5A', 
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#A9A9A9', 
  },
  text: {
    color: '#C0C0C0', 
  },
  boatsaw: {
    backgroundColor: '#261616',
    color: '#261616'
  }
});

export default styles;
