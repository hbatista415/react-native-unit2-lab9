import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function DurationExercise({ route, navigation }) {
  const { exercise, exercises } = route.params;

  const [time, setTime] = useState(0);
  const interval = useRef(null);

  const start = () => {
    if (interval.current) return;

    interval.current = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);
  };

  const reset = () => {
    clearInterval(interval.current);
    interval.current = null;
    setTime(0);
  };

  const suggested = exercises.find(e => e.id === exercise.suggested);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{exercise.name}</Text>

      <Text style={{ fontSize: 20, marginVertical: 20 }}>
        Time: {time}s
      </Text>

      <Button title="Start" onPress={start} />
      <Button title="Reset" onPress={reset} />

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
