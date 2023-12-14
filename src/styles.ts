import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: 'cream',
    padding: 10,
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  shoppingList: {
    flex: 1,
  },
  shoppingListItem: {
    flexDirection: 'row',
    borderColor: '#6495ed',
    borderWidth: 3,
    borderRadius: 30,
    marginBottom: 3,
  },
  shoppingListItemText: {
    padding: 10,
    fontSize: 15,
  },
});
