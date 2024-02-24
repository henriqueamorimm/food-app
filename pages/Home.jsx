import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
      />
      <ScrollView contentContainerStyle={styles.foodsContainer}>
        
        <TouchableOpacity style={styles.foodCard} onPress={() => navigation.navigate('Detalhes')}>
          <Image source={require('./pizza.jpg')} style={styles.foodImage} />
          <Text style={styles.foodName}>Pizza</Text>
        </TouchableOpacity>

      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  foodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  foodCard: {
    width: '48%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  foodImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
