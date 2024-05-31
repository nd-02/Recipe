import React from 'react';
import { View, FlatList, Pressable, Text, StyleSheet } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { useNavigation } from '@react-navigation/native';

const recipes = [
  {
    id: '1',
    name: 'Carbonara',
    numTimes: 2,
    ingredients: [
      { ingredient: { name: 'spaghetti', unityOfMeasure: 'gr' }, quantity: 200 },
      { ingredient: { name: 'pecorino', unityOfMeasure: 'gr' }, quantity: 50 },
      { ingredient: { name: 'guanciale', unityOfMeasure: 'gr' }, quantity: 50 },
      { ingredient: { name: 'uova', unityOfMeasure: '' }, quantity: 6 }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
  },
  {
    id: '2',
    name: 'Spaghetti al pomodoro',
    numTimes: 2,
    ingredients: [
      { ingredient: { name: 'spaghetti', unityOfMeasure: 'g' }, quantity: 200 },
      { ingredient: { name: 'pomodoro', unityOfMeasure: 'g' }, quantity: 50 }
    ],
    image: 'https://media.gqitalia.it/photos/5db1c4398ab84500087a2de9/16:9/w_2560%2Cc_limit/pasta.jpg'
  }
];

const RecipesScreen = () => {
  const navigation = useNavigation();

  const navigateToDetails = (item) => {
    navigation.navigate('RecipeDetails', {
      id: item.id,
      recName: item.name,
      image: item.image
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.addButton} onPress={() => alert('Add Recipe')}>
        <Text style={styles.addButtonText}>Add Recipe</Text>
      </Pressable>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <RecipeItem
            id={item.id}
            name={item.name}
            numTimes={item.numTimes}
            ingredients={item.ingredients} 
            image={item.image}
            onPress={() => navigateToDetails(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default RecipesScreen;
