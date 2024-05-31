import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import OpenURLWrapper from '../components/OpenURLButton';

const RecipeDetailsScreen = ({ route }) => {
  const { recName, image, ingredients } = route.params;
  const linkIcon = 'https://static-00.iconduck.com/assets.00/create-link-icon-2048x2048-vdoe2pfs.png';

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{recName}</Text>
        <OpenURLWrapper url="https://www.giallozafferano.com/">
          <Image source={{ uri: linkIcon }} style={styles.icon} />
        </OpenURLWrapper>
      </View>
      
      {ingredients && ingredients.length > 0 && (
        <View style={styles.ingredientsContainer}>
          <Text style={styles.subtitle}>Ingredients:</Text>
          {ingredients.map((ingr, index) => (
            <Text key={index} style={styles.ingredientsText}>
              {`${ingr.ingredient.name.toLowerCase()} ${ingr.quantity}${ingr.ingredient.unityOfMeasure}`}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icon: {
    width: 40,
    height: 40,
  },
  ingredientsContainer: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RecipeDetailsScreen;
