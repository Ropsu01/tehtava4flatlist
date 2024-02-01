import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import { useEffect, useState } from 'react';
import Search from './components/search';

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    const searchLower = search.toLowerCase(); // Convert search input to lowercase
    const searchArray = DATA.filter((item) =>
      item.lastname.toLowerCase().startsWith(searchLower) || // Convert lastname to lowercase before comparison
      item.firstname.toLowerCase().startsWith(searchLower) // Convert firstname to lowercase before comparison
    );
    setItems(searchArray);
  }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});