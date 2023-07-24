import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

interface Props {
  addGoalFunc: (goal: string) => void;
}

const GoalInput: React.FC<Props> = (props) => {
  const [goal, setGoal] = useState("");

  function goalInputHandler(entredText: string) {
    setGoal(entredText);
  }

  function addGoalHandler() {
    props.addGoalFunc(goal);
    setGoal("");
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your goal here"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
