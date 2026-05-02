import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;
  const [count, setCount] = useState(0);

  const suggested = exercises.find(e => e.id === exercise.suggested);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{exercise.name}</Text>

      <Text style={{ fontSize: 20, marginVertical: 20 }}>
        Count: {count}
      </Text>

      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />

      <Button
        title="Suggested Exercise"
        onPress={() =>
          navigation.replace(
            suggested.type === "repetition"
              ? "RepetitionExercise"
              : "DurationExercise",
            { exercise: suggested, exercises }
          )
        }
      />

      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
