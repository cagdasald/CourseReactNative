import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

interface Props {
  addGoalFunc: (goal: string) => void;
  onCancel: () => void;
  isVisible: boolean;
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
    <Modal visible={props.isVisible} animationType={"slide"}>
      <View style={styles.inputWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type your goal here"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.btnWrapper}>
          <View style={styles.btn}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#b180f1"/>
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
    width: "100%",
    marginRight: 8,
    padding: 12,
    marginBottom: 16,
    color: "#120438",
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    marginHorizontal: 8,
    width: 100,
  },
});
