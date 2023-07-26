import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

interface Props {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
}

const GoalItem: React.FC<Props> = (props) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "#210644", borderless: true }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem }
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    margin: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    color: "#fff",
    padding: 8,
  },
});
