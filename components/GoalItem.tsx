import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

interface Props {
  text: string;
  id: string;
  onDeleteItem: (id : string) => void;
}

const GoalItem: React.FC<Props> = (props) => {

  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalsItem}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
  text: {
    color: "#fff",
  },
});
