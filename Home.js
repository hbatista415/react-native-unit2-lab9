import React from "react";
import { FlatList, View } from "react-native";
import { Button } from "react-native-elements";

export default function Home({ navigation, exercises }) {
  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === "repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                {
                  exercise: item,
                  exercises: exercises,
                }
              )
            }
            containerStyle={{ marginBottom: 10 }}
          />
        )}
      />
    </View>
  );
}
