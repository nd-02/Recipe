import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipeItem = ({ id, name, numTimes, ingredients, image }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      testID={`recipe-${id}`}
      key={id.toString()}
      style={styles.listContainer}
      onPress={() => navigation.navigate('Recipe', { recName: name, recId: id, image })}
    >
      {!!image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholderImage} />
      )}
      <Text style={styles.headline}>
        {name} {numTimes && "x" + numTimes}
      </Text>
      <View style={styles.ingredientsContainer}>
        {ingredients && (
          <Text>
            Ingredients:{" "}
            {ingredients.map(
              (ingr, index) =>
                ingr.ingredient.name.toLowerCase() +
                " " +
                ingr.quantity +
                ingr.ingredient.unityOfMeasure +
                (index !== ingredients.length - 1 ? ", " : "")
            )}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
  },
  image: {
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholderImage: {
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    marginBottom: 10,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default RecipeItem;
