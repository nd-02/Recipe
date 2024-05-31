# react-native-recipes-components

Welcome to `react-native-recipes-components`!

`react-native-recipes-components` is a lightweight library for React Native developers to create and manage interactive recipe components easily. Designed to simplify the creation of dynamic recipe interfaces, this library provides a collection of components with high performance and flexibility. Ideal for developers who need to integrate recipe management features into their React Native applications in a fast and easy way.

## Features

1. **OpenURLWrapper**: A component for handling external URL links within your app.
2. **RecipeItem**: Component for displaying recipe details in a stylish and interactive manner.

## Target Audience

React Native developers seeking easy, efficient, and customizable recipe management solutions.

## Requirements

This library uses:

- [React Native](https://reactnative.dev/)
  - Version 0.64 or higher

## Installation Guide

### 1. Install Node.js and `npm`

Before installing `react-native-recipes-components`, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### 2. Create a Project

#### 2.1 Install Expo CLI

If you need a project to test these components, I suggest using [Expo CLI](https://docs.expo.dev/more/expo-cli/) to create one quickly.

To install Expo CLI globally on your system, run the following command in your terminal:

```bash
npm install -g expo-cli
```

#### 2.2 Create a React Native Project

Create a new React Native project with the following command:

```bash
npx create-react-native-app my-recipes-app
cd my-recipes-app
```

#### 2.3 Check that your Project is running fine

Start the development server with:

```bash
npm start
```

Use Expo Go on your iOS or Android phone to scan the QR code from your terminal to open your project. Make sure to install Expo Go from your device's app store if you haven't already.

For more information, visit the [React Native Official Website](https://reactnative.dev/docs/environment-setup).

### 3. Install Dependencies

Navigate to your project folder and install `react-native-recipes-components`:

```bash
npm install react-native-recipes-components --legacy-peer-deps
```

## Components

This library provides the following components:

- [OpenURLWrapper](#openurlwrapper)
- [RecipeItem](#recipeitem)

## `OpenURLWrapper`

`OpenURLWrapper` is a React Native component designed to handle external URL links within your app. It provides a convenient way to open URLs with custom URL schemes, ensuring compatibility with various link types.

### Input

Required props are `url` and `children`:

1. `url`: The URL to be opened when the component is pressed.
2. `children`: The content to be rendered inside the pressable area.

### Functionalities

1. Checks if the link is supported before opening.
2. Opens the link with the appropriate app or browser.

#### Example

```jsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import OpenURLWrapper from "../components/OpenURLButton";

const RecipeDetailsScreen = ({ route }) => {
  const { recName, image, ingredients } = route.params;
  const linkIcon =
    "https://static-00.iconduck.com/assets.00/create-link-icon-2048x2048-vdoe2pfs.png";

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
              {`${ingr.ingredient.name.toLowerCase()} ${ingr.quantity}${
                ingr.ingredient.unityOfMeasure
              }`}
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
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
    fontWeight: "bold",
    marginBottom: 10,
  },
  ingredientsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default RecipeDetailsScreen;
```

### Output

![Recipe Screen Output](/images/RecipeDetailsScreenOutput.jpg)

#### Props

| Property | Default | Description                                           |
| -------- | ------- | ----------------------------------------------------- |
| url      | null    | The URL to be opened when the component is pressed.   |
| children | null    | The content to be rendered inside the pressable area. |

## `RecipeItem`

`RecipeItem` is a React Native component designed to display recipe details in a stylish and interactive way. It provides an intuitive way to present recipe information, including name, image, ingredients, and navigation to detailed views.

### Input

Required props are recipe details including `id`, `name`, `numTimes`, `ingredients`, `image`, and `navigation`.

### Functionalities

1. Displays the recipe image, name, and ingredients.
2. Navigates to detailed recipe view when pressed.

#### Example

```jsx
import React from "react";
import { View, FlatList, Pressable, Text, StyleSheet } from "react-native";
import RecipeItem from "../components/RecipeItem";
import { useNavigation } from "@react-navigation/native";

const recipes = [
  {
    id: "1",
    name: "Carbonara",
    numTimes: 2,
    ingredients: [
      {
        ingredient: { name: "spaghetti", unityOfMeasure: "gr" },
        quantity: 200,
      },
      { ingredient: { name: "pecorino", unityOfMeasure: "gr" }, quantity: 50 },
      { ingredient: { name: "guanciale", unityOfMeasure: "gr" }, quantity: 50 },
      { ingredient: { name: "uova", unityOfMeasure: "" }, quantity: 6 },
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg",
  },
  {
    id: "2",
    name: "Spaghetti al pomodoro",
    numTimes: 2,
    ingredients: [
      { ingredient: { name: "spaghetti", unityOfMeasure: "g" }, quantity: 200 },
      { ingredient: { name: "pomodoro", unityOfMeasure: "g" }, quantity: 50 },
    ],
    image:
      "https://media.gqitalia.it/photos/5db1c4398ab84500087a2de9/16:9/w_2560%2Cc_limit/pasta.jpg",
  },
];

const RecipesScreen = () => {
  const navigation = useNavigation();

  const navigateToDetails = (item) => {
    navigation.navigate("RecipeDetails", {
      id: item.id,
      recName: item.name,
      image: item.image,
      ingredients: item.ingredients,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.addButton} onPress={() => alert("Add Recipe")}>
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
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default RecipesScreen;
```

### Output

![Recipe Screen Output](/images/RecipeScreenOutput.jpg)

When a recipe item is pressed, it navigates to the detailed recipe view.

#### Props

| Property    | Default | Description                                                   |
| ----------- | ------- | ------------------------------------------------------------- |
| id          | null    | Unique identifier for the recipe.                             |
| name        | null    | Name of the recipe.                                           |
| numTimes    | null    | Number of times the recipe has been made.                     |
| ingredients | null    | List of ingredients with name, quantity, and unit of measure. |
| image       | null    | URL of the recipe image.                                      |
| navigation  | null    | Navigation prop to navigate to detailed recipe view.          |

# CHANGELOG.md

## 1.0.0 - 2024-05-30

### Added

- Initial release with components `OpenURLWrapper` and `RecipeItem`.

# License

[ISC](./LICENSE)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
