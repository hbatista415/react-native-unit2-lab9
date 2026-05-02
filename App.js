import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import RepetitionExercise from "./screens/RepetitionExercise";
import DurationExercise from "./screens/DurationExercise";

const Stack = createNativeStackNavigator();

export default function App() {
  const exercises = [
    { id: "1", name: "Push Ups", type: "repetition", suggested: "2" },
    { id: "2", name: "Sit Ups", type: "repetition", suggested: "3" },
    { id: "3", name: "Plank", type: "duration", suggested: "1" },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} exercises={exercises} />}
        </Stack.Screen>

        <Stack.Screen name="RepetitionExercise">
          {(props) => <RepetitionExercise {...props} />}
        </Stack.Screen>

        <Stack.Screen name="DurationExercise">
          {(props) => <DurationExercise {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
